"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Calendar, User, Phone, Mail, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

const schema = z.object({
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

type FormData = z.infer<typeof schema>;

interface AppointmentFormProps {
  compact?: boolean;
}

export default function AppointmentForm({ compact = false }: AppointmentFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setFormError(null);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to book appointment. Please try again.");
      }
      setBookingRef(result.bookingId || "TD-DEMO");
      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setFormError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/30 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-teal-600 dark:text-teal-400" />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-1">
          Appointment Request Received!
        </h3>
        <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold mb-3">
          Reference ID: {bookingRef}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs max-w-sm mb-4 leading-relaxed">
          Our patient coordination team will reach out to you within 30 minutes via phone call or WhatsApp to confirm your slot.
        </p>
        <p className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-500 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 max-w-sm">
          💡 Demo Mode Notice: Connect this form endpoint to the hospital&apos;s live PMS/EHR backend API before production deployment.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 dark:text-blue-400 text-xs font-bold hover:underline"
        >
          ← Book another appointment
        </button>
      </div>
    );
  }

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-[#07080c] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-500 focus:ring-red-500/20"
        : "border-amber-500/30 focus:ring-[#f9db8d]/20 focus:border-[#f9db8d]"
    }`;

  const labelClass = "block text-xs font-semibold text-[#f9db8d] uppercase tracking-wide mb-1.5 font-mono";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
      aria-label="Appointment booking form"
    >
      {/* Name */}
      <div>
        <label htmlFor="appt-name" className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            id="appt-name"
            {...register("name")}
            type="text"
            placeholder="Your full name"
            className={`${inputClass(!!errors.name)} pl-10`}
            autoComplete="name"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="appt-phone" className={labelClass}>
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            id="appt-phone"
            {...register("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            className={`${inputClass(!!errors.phone)} pl-10`}
            autoComplete="tel"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      {!compact && (
        <div>
          <label htmlFor="appt-email" className={labelClass}>
            Email Address
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id="appt-email"
              {...register("email")}
              type="email"
              placeholder="your@email.com"
              className={`${inputClass(!!errors.email)} pl-10`}
              autoComplete="email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>
          )}
        </div>
      )}

      {/* Service */}
      <div>
        <label htmlFor="appt-service" className={labelClass}>
          Treatment Required <span className="text-red-500">*</span>
        </label>
        <select
          id="appt-service"
          {...register("service")}
          className={inputClass(!!errors.service)}
        >
          <option value="" className="bg-[#07080c]">Select a treatment</option>
          {services.map((s) => (
            <option key={s.id} value={s.title} className="bg-[#07080c]">{s.title}</option>
          ))}
          <option value="General Checkup" className="bg-[#07080c]">General Check-up / Cleaning</option>
          <option value="Other" className="bg-[#07080c]">Other / Not Sure</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.service.message}</p>
        )}
      </div>

      {/* Date & Time */}
      {!compact && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="appt-date" className={labelClass}>
              Preferred Date
            </label>
            <div className="relative">
              <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                id="appt-date"
                {...register("preferredDate")}
                type="date"
                className={`${inputClass()} pl-10`}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div>
            <label htmlFor="appt-time" className={labelClass}>
              Preferred Time
            </label>
            <select id="appt-time" {...register("preferredTime")} className={inputClass()}>
              <option value="" className="bg-[#07080c]">Any time</option>
              <option className="bg-[#07080c]">9:00 AM – 11:00 AM</option>
              <option className="bg-[#07080c]">11:00 AM – 1:00 PM</option>
              <option className="bg-[#07080c]">2:00 PM – 5:00 PM</option>
              <option className="bg-[#07080c]">5:00 PM – 8:00 PM</option>
            </select>
          </div>
        </div>
      )}

      {/* Message */}
      {!compact && (
        <div>
          <label htmlFor="appt-message" className={labelClass}>
            Additional Information
          </label>
          <div className="relative">
            <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-slate-400" aria-hidden="true" />
            <textarea
              id="appt-message"
              {...register("message")}
              rows={3}
              placeholder="Any specific concerns or information..."
              className={`${inputClass(!!errors.message)} pl-10 resize-none`}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.message.message}</p>
          )}
        </div>
      )}

      {formError && (
        <p className="text-red-500 text-xs text-center font-semibold bg-red-950/30 p-2.5 rounded-lg border border-red-500/30" role="alert">
          {formError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full py-3.5 rounded-xl justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        style={{ borderRadius: "0.75rem" }}
        id="appt-submit"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Calendar size={18} />
            Book My Appointment
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        By booking, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-[#f9db8d] transition-colors">Privacy Policy</a>.
        We&apos;ll confirm within 30 minutes.
      </p>
    </form>
  );
}
