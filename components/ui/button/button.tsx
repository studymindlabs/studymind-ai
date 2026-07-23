import { cn } from "@/lib/utils";
import { Spinner } from "../spinner/spinner";
import { ButtonProps } from "./button.types";

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:pointer-events-none",

    fullWidth && "w-full",

    size === "sm" && "h-9 px-3 text-sm",
    size === "md" && "h-10 px-4 text-sm",
    size === "lg" && "h-12 px-6 text-base",

    variant === "primary" &&
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

    variant === "secondary" &&
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",

    variant === "outline" &&
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-400",

    variant === "ghost" &&
      "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-400",

    variant === "danger" &&
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

    variant === "success" &&
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

    (disabled || loading) &&
      "cursor-not-allowed opacity-60",

    !(disabled || loading) &&
      "cursor-pointer",

    className
  );

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </button>
  );
}