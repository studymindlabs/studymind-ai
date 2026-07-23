import { cn } from "@/lib/utils";

import type { DashboardGridProps } from "./dashboard-grid.types";

export function DashboardGrid({
  children,
  className,
}: DashboardGridProps) {
  return (
    <section
      className={cn(
        "grid gap-6",
        "grid-cols-1",
        "sm:grid-cols-2",
        "xl:grid-cols-4",
        className
      )}
    >
      {children}
    </section>
  );
}