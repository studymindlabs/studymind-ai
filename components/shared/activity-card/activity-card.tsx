import { cn } from "@/lib/utils";

import type { ActivityCardProps } from "./activity-card.types";

export function ActivityCard({
  title,
  time,
  description,
  className,
}: ActivityCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-zinc-800",
        "bg-zinc-900",
        "p-5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>

        <span className="text-xs text-zinc-500">
          {time}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  );
}