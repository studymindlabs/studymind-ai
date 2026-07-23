interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}