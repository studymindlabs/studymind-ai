import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Note } from "@/types/note";
import { mockNotes } from "@/constants/mock-notes";

type NotesStore = {
  notes: Note[];

  editingNote: Note | null;

  setEditingNote: (note: Note | null) => void;

  addNote: (note: Note) => void;

  updateNote: (note: Note) => void;

  deleteNote: (id: string) => void;

  toggleFavorite: (id: string) => void;

  togglePin: (id: string) => void;

  resetNotes: () => void;
};

export const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      notes: mockNotes,

      editingNote: null,

      setEditingNote: (note) =>
        set({
          editingNote: note,
        }),

      addNote: (note) =>
        set((state) => ({
          notes: [note, ...state.notes],
        })),

      updateNote: (updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === updatedNote.id
              ? {
                  ...updatedNote,
                  updatedAt: new Date().toISOString(),
                }
              : note
          ),
        })),

      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter(
            (note) => note.id !== id
          ),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? {
                  ...note,
                  favorite: !note.favorite,
                }
              : note
          ),
        })),

      togglePin: (id) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? {
                  ...note,
                  pinned: !note.pinned,
                }
              : note
          ),
        })),

      resetNotes: () =>
        set({
          notes: mockNotes,
          editingNote: null,
        }),
    }),
    {
      name: "studymind-notes",
    }
  )
);