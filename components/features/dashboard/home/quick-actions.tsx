import QuickAction from "@/components/dashboard/quick-action";
import SectionTitle from "@/components/dashboard/section-title";

export default function QuickActions() {
  return (
    <section className="space-y-5">
      <SectionTitle
        title="Quick Actions"
        subtitle="Launch your favorite AI tools instantly."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <QuickAction
          href="/notes"
          icon="notes"
          title="AI Notes"
          description="Create smart study notes."
        />

        <QuickAction
          href="/summary"
          icon="summary"
          title="Summary"
          description="Summarize any document."
        />

        <QuickAction
          href="/quiz"
          icon="quiz"
          title="Quiz Generator"
          description="Generate AI quizzes."
        />

        <QuickAction
          href="/flashcards"
          icon="flashcards"
          title="Flashcards"
          description="Memorize faster."
        />

        <QuickAction
          href="/chat"
          icon="chat"
          title="AI Tutor"
          description="Ask anything."
        />

        <QuickAction
          href="/courses"
          icon="courses"
          title="Courses"
          description="Continue learning."
        />
      </div>
    </section>
  );
}