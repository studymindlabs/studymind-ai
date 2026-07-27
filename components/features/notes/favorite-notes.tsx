import FavoriteNoteCard from "./favorite-note-card";

const favorites = [
  {
    id: "physics",
    title: "Physics Final Revision",
    subject: "Physics",
  },
  {
    id: "marketing",
    title: "Marketing Strategy",
    subject: "Business",
  },
];

export default function FavoriteNotes() {
  return (
    <section className="space-y-5">

      <div>

        <h2 className="text-xl font-semibold text-white">
          Favorite Notes
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Quickly access your starred notes.
        </p>

      </div>

      <div className="space-y-4">

        {favorites.map((note) => (
          <FavoriteNoteCard
            key={note.id}
            {...note}
          />
        ))}

      </div>

    </section>
  );
}