import SectionTitle from "@/components/dashboard/section-title";
import AIAssistantCard from "@/components/dashboard/ai-assistant-card";

export default function AIAssistant() {
  return (
    <section className="space-y-5">
      <SectionTitle
        title="AI Assistant"
        subtitle="Daily recommendations powered by AI."
      />

      <AIAssistantCard />
    </section>
  );
}