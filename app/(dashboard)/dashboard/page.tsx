import {
  Welcome,
  LearningAnalytics,
  StatsGrid,
  QuickActions,
  ContinueLearning,
  RecentActivity,
  AIAssistant,
} from "@/components/features/dashboard/home";

export default function DashboardPage() {
  return (
    <div className="relative space-y-8 overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative space-y-8">

        <Welcome />

        <LearningAnalytics />

        <StatsGrid />

        <QuickActions />

        <ContinueLearning />

        <div className="grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2">
            <RecentActivity />
          </div>

          <div>
            <AIAssistant />
          </div>

        </div>

      </div>

    </div>
  );
}