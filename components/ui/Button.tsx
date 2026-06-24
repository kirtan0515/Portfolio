import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const variantStyles = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white shadow-glow hover:shadow-glow-lg border border-indigo-500/50",
  secondary:
    "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600",
  ghost: "hover:bg-slate-800/60 text-slate-300 hover:text-white",
  outline:
    "border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050810] disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
