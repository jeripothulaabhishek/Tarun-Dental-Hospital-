import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod Schema matching form inputs
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .regex(/^[\d\s\+\-\(\)]{10,15}$/, "Invalid phone number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().max(500, "Maximum 500 characters").optional(),
});

// Simple in-memory rate limiter per serverless container instance
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // max 3 submissions per minute per IP to prevent spam

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - limit.lastReset > LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (limit.count >= MAX_REQUESTS) {
    return false;
  }

  limit.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";
    const allowed = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many appointment requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Request Body
    const body = await request.json();
    const result = appointmentSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // 3. Email Notification via Resend API (HTTP Fetch to avoid dependency weight)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "tarundentalclinic@gmail.com";
    let emailSent = false;

    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Appointment Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
          <p><strong>Treatment Requested:</strong> ${data.service}</p>
          <p><strong>Preferred Date:</strong> ${data.preferredDate || "Any date"}</p>
          <p><strong>Preferred Time:</strong> ${data.preferredTime || "Any time"}</p>
          <p><strong>Message/Notes:</strong> ${data.message || "None"}</p>
          <hr />
          <p>Please call or WhatsApp this patient within 30 minutes to confirm booking.</p>
        `;

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Tarun Dental Hospital <appointments@tarundental.com>",
            to: notificationEmail,
            subject: `[Appointment Request] ${data.name} - ${data.service}`,
            html: emailHtml,
          }),
        });

        if (resendResponse.ok) {
          emailSent = true;
        } else {
          console.error("Resend API failed:", await resendResponse.text());
        }
      } catch (err) {
        console.error("Failed to send notification email:", err);
      }
    } else {
      console.log("[MOCK BOOKING SUCCESS] No RESEND_API_KEY configured. Logging details:", data);
    }

    // 4. Return Success Response
    const bookingId = `TD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      bookingId,
      emailSent,
      message: "Appointment request received successfully.",
    });
  } catch (error) {
    console.error("Internal Server Error in appointments route:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
