import { ProgressCard } from "@/components/shared/progress-card/progress-card";
import { cn } from "@/lib/utils";

import type { ProgressSectionProps } from "./progress-section.types";

export function ProgressSection({
  className,
}: ProgressSectionProps) {
  return (
    <section
      className={cn(
        "grid gap-6",
        "lg:grid-cols-3",
        className
      )}
    >
      <ProgressCard
        title="Today's Progress"
        value={6}
        max={10}
        description="6 of 10 lessons completed today."
      />

      <ProgressCard
        title="Course Completion"
        value={72}
        max={100}
        description="Overall completion progress."
      />

      <ProgressCard
        title="Weekly Goal"
        value={18}
        max={25}
        description="Keep going to reach your weekly goal."
      />
    </section>
  );
}