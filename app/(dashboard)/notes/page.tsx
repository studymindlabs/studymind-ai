"use client";

import { useMemo, useState } from "react";

import { mockNotes } from "@/constants/mock-notes";

import {
  NotesLayout,
  NotesHeader,
  NotesSearch,
  NotesFilter,
  NotesGrid,
  NotesPagination,
} from "@/components/features/notes";

export default function NotesPage() {
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return mockNotes;
    }

    return mockNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(keyword) ||
        note.content.toLowerCase().includes(keyword) ||
        (note.summary ?? "").toLowerCase().includes(keyword) ||
        (note.folder ?? "").toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  return (
    <NotesLayout>
      <NotesHeader />

      <NotesSearch
        value={search}
        onSearchChange={setSearch}
      />

      <NotesFilter />

      <NotesGrid
        notes={filteredNotes}
      />

      <NotesPagination />
    </NotesLayout>
  );
}