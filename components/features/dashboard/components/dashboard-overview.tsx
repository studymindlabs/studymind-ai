import { DashboardGrid } from "@/components/shared/dashboard-grid/dashboard-grid";
import { StatCard } from "@/components/shared/stat-card/stat-card";

export function DashboardOverview() {
  return (
    <DashboardGrid>
      <StatCard
        title="Courses"
        value="12"
        description="Active Courses"
      />

      <StatCard
        title="Study Hours"
        value="184"
        description="Total Hours"
      />

      <StatCard
        title="Current Streak"
        value="16"
        description="Days"
      />

      <StatCard
        title="XP"
        value="2,480"
        description="Experience Points"
      />
    </DashboardGrid>
  );
}