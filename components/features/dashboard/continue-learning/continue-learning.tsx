import { CourseCard } from "@/components/shared/course-card";
import { cn } from "@/lib/utils";

import type { ContinueLearningProps } from "./continue-learning.types";

export function ContinueLearning({
  className,
}: ContinueLearningProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-2xl font-bold text-white">
          Continue Learning
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Pick up where you left off.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <CourseCard
          title="React Fundamentals"
          progress={72}
          lessons="18 / 25 Lessons"
          duration="4h 20m Remaining"
        />

        <CourseCard
          title="JavaScript Mastery"
          progress={51}
          lessons="12 / 24 Lessons"
          duration="6h Remaining"
        />

        <CourseCard
          title="AI Fundamentals"
          progress={90}
          lessons="27 / 30 Lessons"
          duration="45m Remaining"
        />
      </div>
    </section>
  );
}