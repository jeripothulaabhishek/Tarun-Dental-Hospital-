import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "whatsapp";
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  href,
  external = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-350 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer rounded-full";
  
  const variantStyles = {
    primary: "btn-primary shadow-lg hover:shadow-xl",
    secondary: "btn-secondary hover:bg-[#f9db8d]/15 hover:text-[#f9db8d] hover:border-[#f9db8d]",
    white: "btn-white shadow-md hover:shadow-lg",
    whatsapp: "btn-whatsapp shadow-md hover:shadow-lg",
  }[variant];

  const combinedClasses = cn(
    baseStyles,
    variantStyles,
    fullWidth ? "w-full" : "w-fit",
    className
  );

  const iconContent = icon && <span className="flex-shrink-0">{icon}</span>;

  const content = (
    <>
      {icon && iconPosition === "left" && iconContent}
      {children}
      {icon && iconPosition === "right" && iconContent}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
