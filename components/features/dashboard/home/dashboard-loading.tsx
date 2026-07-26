import Skeleton from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-8">

      {/* Welcome */}
      <Skeleton className="h-40 w-full rounded-3xl" />

      {/* Analytics */}
      <Skeleton className="h-64 w-full rounded-3xl" />

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Skeleton className="h-36 rounded-2xl" />
        <Skeleton className="h-36 rounded-2xl" />
        <Skeleton className="h-36 rounded-2xl" />
        <Skeleton className="h-36 rounded-2xl" />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-36 rounded-2xl" />
        <Skeleton className="h-36 rounded-2xl" />
        <Skeleton className="h-36 rounded-2xl" />
      </div>

    </div>
  );
}