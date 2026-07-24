import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type { CardProps } from "./card.types";

export const Card = forwardRef<
  HTMLDivElement,
  CardProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";