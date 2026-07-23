import { cn } from "@/lib/utils";

import type { StatCardProps } from "./stat-card.types";

export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-zinc-800",
        "bg-zinc-900",
        "p-6",
        "transition-all duration-300",
        "hover:border-blue-500/50",
        "hover:shadow-lg hover:shadow-blue-500/10",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-zinc-500">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className="rounded-xl bg-blue-600/10 p-3 text-blue-400">
            {icon}
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-6">
          <span
            className={cn(
              "text-sm font-medium",
              trend.positive
                ? "text-emerald-400"
                : "text-red-400"
            )}
          >
            {trend.value}
          </span>
        </div>
      )}
    </div>
  );
}