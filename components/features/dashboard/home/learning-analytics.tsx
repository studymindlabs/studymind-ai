import SectionTitle from "@/components/dashboard/section-title";
import LearningAnalyticsCard from "@/components/dashboard/learning-analytics-card";

export default function LearningAnalytics() {
  return (
    <section className="space-y-5">

      <SectionTitle
        title="Learning Analytics"
        subtitle="Track your learning progress and weekly performance."
      />

      <LearningAnalyticsCard />

    </section>
  );
}