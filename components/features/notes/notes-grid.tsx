import type { Note } from "@/types/note";
import NotesCard from "./notes-card";
import EmptyState from "./empty-state";

type NotesGridProps = {
  notes: Note[];
};

export default function NotesGrid({
  notes,
}: NotesGridProps) {
  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NotesCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}