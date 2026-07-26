import {
  Welcome,
  StatsGrid,
} from "@/components/features/dashboard/home";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <Welcome />

      <StatsGrid />

    </div>
  );
}