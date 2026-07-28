import { useNotesStore } from "@/lib/stores/notes-store";

import NotesGrid from "./notes-grid";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);

  const toggleFavorite = useNotesStore(
    (state) => state.toggleFavorite
  );

  const togglePin = useNotesStore(
    (state) => state.togglePin
  );

  const deleteNote = useNotesStore(
    (state) => state.deleteNote
  );

  const setEditingNote = useNotesStore(
    (state) => state.setEditingNote
  );

  return (
    <section className="space-y-5">

      <h2 className="text-xl font-semibold text-white">
        Recent Notes
      </h2>

      <NotesGrid
        notes={notes}
        onFavoriteToggleAction={toggleFavorite}
        onPinToggleAction={togglePin}
        onDeleteNoteAction={deleteNote}
        onEditNoteAction={setEditingNote}
      />

    </section>
  );
}