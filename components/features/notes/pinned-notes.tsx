import PinnedNoteCard from "./pinned-note-card";

const pinned = [
  {
    id: "prompt-engineering",
    title: "AI Prompt Engineering",
    preview:
      "Master prompting techniques for ChatGPT, Gemini and Claude.",
  },
  {
    id: "physics-formulas",
    title: "Physics Formula Sheet",
    preview:
      "Quick access to all important equations and derivations.",
  },
];

export default function PinnedNotes() {
  return (
    <section className="space-y-5">

      <div>

        <h2 className="text-xl font-semibold text-white">
          Pinned Notes
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Your most important notes always stay here.
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        {pinned.map((note) => (
          <PinnedNoteCard
            key={note.id}
            {...note}
          />
        ))}

      </div>

    </section>
  );
}