import { ActivityCard } from "@/components/shared/activity-card/activity-card";
import { cn } from "@/lib/utils";

import type { ActivitySectionProps } from "./activity-section.types";

export function ActivitySection({
  className,
}: ActivitySectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Your latest learning activities.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ActivityCard
          title="Completed React Lesson"
          time="10 min ago"
          description="You successfully completed the React Components lesson."
        />

        <ActivityCard
          title="AI Tutor Session"
          time="1 hour ago"
          description="You asked 12 questions to the AI Tutor."
        />

        <ActivityCard
          title="Quiz Finished"
          time="Yesterday"
          description="Scored 92% in JavaScript Fundamentals Quiz."
        />
      </div>
    </section>
  );
}