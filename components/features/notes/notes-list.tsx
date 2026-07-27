import NoteCard from "./note-card";

const notes = [
  {
    id: "1",
    title: "AI Prompt Engineering",
    preview:
      "Learn how to write effective prompts for ChatGPT, Gemini and Claude.",
    updatedAt: "Today",
  },
  {
    id: "2",
    title: "Physics Chapter 5",
    preview:
      "Important formulas, derivations and solved examples collected by AI.",
    updatedAt: "Yesterday",
  },
  {
    id: "3",
    title: "Business Strategy",
    preview:
      "AI generated business planning notes with SWOT analysis.",
    updatedAt: "2 days ago",
  },
];

export default function NotesList() {
  return (
    <section className="space-y-5">

      <h2 className="text-xl font-semibold text-white">
        Recent Notes
      </h2>

      <div className="space-y-5">

        {notes.map((note) => (
          <NoteCard
            key={note.id}
            {...note}
          />
        ))}

      </div>

    </section>
  );
}