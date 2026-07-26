import StatCard from "./stat-card";

export default function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="AI Notes"
        value={128}
        subtitle="+12 today"
        icon="NotebookPen"
      />

      <StatCard
        title="Quiz Accuracy"
        value={94}
        suffix="%"
        subtitle="+3%"
        icon="Brain"
      />

      <StatCard
        title="Courses"
        value={8}
        subtitle="2 active"
        icon="BookOpen"
      />

      <StatCard
        title="Learning Streak"
        value={15}
        subtitle="Keep going!"
        icon="Flame"
      />

    </section>
  );
}