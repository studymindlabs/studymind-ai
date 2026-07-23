import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "font-medium",
    "transition-all",
    "duration-200",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",

        secondary:
          "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400",

        outline:
          "border border-gray-300 bg-transparent hover:bg-gray-100",

        ghost:
          "bg-transparent hover:bg-gray-100",

        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-10 px-4",

        lg: "h-11 px-6 text-lg",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);