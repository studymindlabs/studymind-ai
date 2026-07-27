import {
  NotesHeader,
  NotesToolbar,
  PinnedNotes,
  FavoriteNotes,
  NotesList,
} from "@/components/features/notes";

import NotesLayout from "@/components/features/notes/notes-layout";

export default function NotesPage() {
  return (
    <NotesLayout>

      <div className="space-y-10">

        <NotesHeader />

        <NotesToolbar />

        <PinnedNotes />

        <FavoriteNotes />

        <NotesList />

      </div>

    </NotesLayout>
  );
}