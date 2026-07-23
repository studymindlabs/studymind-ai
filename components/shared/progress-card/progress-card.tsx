import { cn } from "@/lib/utils";

import type { ProgressCardProps } from "./progress-card.types";

export function ProgressCard({
  title,
  value,
  max,
  description,
  className,
}: ProgressCardProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-zinc-800",
        "bg-zinc-900",
        "p-6",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <span className="text-sm text-zinc-400">
          {value}/{max}
        </span>
      </div>

      <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}