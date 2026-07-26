"use client";

import {
  NotebookPen,
  FileText,
  Brain,
  Layers3,
} from "lucide-react";

import QuickAction from "@/components/dashboard/quick-action";
import SectionTitle from "@/components/dashboard/section-title";

export default function QuickActions() {
  return (
    <section className="space-y-6">
      <SectionTitle
        title="Quick Actions"
        subtitle="Jump into your favorite AI tools."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <QuickAction
          title="AI Notes"
          description="Create smart notes instantly."
          href="/notes"
          icon={NotebookPen}
        />

        <QuickAction
          title="Summary"
          description="Summarize any document."
          href="/summary"
          icon={FileText}
        />

        <QuickAction
          title="Quiz Generator"
          description="Generate AI quizzes."
          href="/quiz"
          icon={Brain}
        />

        <QuickAction
          title="Flashcards"
          description="Learn with AI flashcards."
          href="/flashcards"
          icon={Layers3}
        />
      </div>
    </section>
  );
}