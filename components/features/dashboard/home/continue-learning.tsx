import ContinueLearningCard from "@/components/dashboard/continue-learning-card";
import SectionTitle from "@/components/dashboard/section-title";

export default function ContinueLearning() {
  return (
    <section className="space-y-5">
      <SectionTitle
        title="Continue Learning"
        subtitle="Resume where you left off."
      />

      <ContinueLearningCard
        title="AI Prompt Engineering"
        progress={72}
        lastOpened="2 hours ago"
        href="/courses"
      />
    </section>
  );
}