import type { Note } from "@/types/note";

import NotesCard from "./notes-card";
import EmptyState from "./empty-state";

type NotesGridProps = {
  notes: Note[];

  onFavoriteToggleAction: (id: string) => void;

  onPinToggleAction: (id: string) => void;

  onDeleteNoteAction: (id: string) => void;

  onEditNoteAction: (note: Note) => void;
};

export default function NotesGrid({
  notes,
  onFavoriteToggleAction,
  onPinToggleAction,
  onDeleteNoteAction,
  onEditNoteAction,
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
          onFavoriteToggleAction={onFavoriteToggleAction}
          onPinToggleAction={onPinToggleAction}
          onDeleteNoteAction={onDeleteNoteAction}
          onEditNoteAction={onEditNoteAction}
        />
      ))}
    </div>
  );
}