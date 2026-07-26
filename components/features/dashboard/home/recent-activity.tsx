import SectionTitle from "@/components/dashboard/section-title";
import RecentActivityCard from "@/components/dashboard/recent-activity-card";

export default function RecentActivity() {
  return (
    <section className="space-y-5">
      <SectionTitle
        title="Recent Activity"
        subtitle="Your latest AI learning history."
      />

      <div className="space-y-4">
        <RecentActivityCard
          title="Created AI Notes"
          time="10 minutes ago"
          icon="NotebookPen"
        />

        <RecentActivityCard
          title="Generated Quiz"
          time="35 minutes ago"
          icon="Brain"
        />

        <RecentActivityCard
          title="AI Tutor Session"
          time="1 hour ago"
          icon="MessageSquare"
        />

        <RecentActivityCard
          title="Flashcards Created"
          time="Yesterday"
          icon="Layers3"
        />
      </div>
    </section>
  );
}