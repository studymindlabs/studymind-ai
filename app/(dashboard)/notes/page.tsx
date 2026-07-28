"use client";

import { useMemo, useState } from "react";

import {
  NotesLayout,
  NotesHeader,
  NotesSearch,
  NotesFilter,
  NotesGrid,
  NotesPagination,
} from "@/components/features/notes";

import { useNotesStore } from "@/lib/stores/notes-store";
import type { Note } from "@/types/note";

export default function NotesPage() {
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

  const [search, setSearch] = useState("");

  const [selectedFolder, setSelectedFolder] =
    useState("All");

  const filteredNotes = useMemo(() => {
    let filtered = [...notes];

    const keyword = search.trim().toLowerCase();

    if (keyword) {
      filtered = filtered.filter((note) => {
        return (
          note.title.toLowerCase().includes(keyword) ||
          note.content.toLowerCase().includes(keyword) ||
          (note.summary ?? "")
            .toLowerCase()
            .includes(keyword) ||
          (note.folder ?? "")
            .toLowerCase()
            .includes(keyword)
        );
      });
    }

    if (selectedFolder !== "All") {
      filtered = filtered.filter(
        (note) => note.folder === selectedFolder
      );
    }

    return filtered;
  }, [notes, search, selectedFolder]);

  function handleEditNoteAction(note: Note) {
    setEditingNote(note);
  }

  return (
    <NotesLayout>

      <NotesHeader />

      <NotesSearch
        value={search}
        onSearchChangeAction={setSearch}
      />

      <NotesFilter
        selectedFolder={selectedFolder}
        onFolderChangeAction={setSelectedFolder}
      />

      <NotesGrid
        notes={filteredNotes}
        onFavoriteToggleAction={toggleFavorite}
        onPinToggleAction={togglePin}
        onDeleteNoteAction={deleteNote}
        onEditNoteAction={handleEditNoteAction}
      />

      <NotesPagination />

    </NotesLayout>
  );
}