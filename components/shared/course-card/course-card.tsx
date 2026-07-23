import { cn } from "@/lib/utils";

import type { CourseCardProps } from "./course-card.types";

export function CourseCard({
  title,
  progress,
  lessons,
  duration,
  className,
}: CourseCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-zinc-800",
        "bg-zinc-900",
        "p-6",
        "transition-all duration-300",
        "hover:border-blue-500",
        "hover:-translate-y-1",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
        <span>{progress}% Complete</span>

        <span>{lessons}</span>
      </div>

      <p className="mt-5 text-xs uppercase tracking-wider text-zinc-500">
        {duration}
      </p>
    </div>
  );
}