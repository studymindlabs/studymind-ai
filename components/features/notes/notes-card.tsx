"use client";

import {
  MoreHorizontal,
  Pin,
  Star,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Note } from "@/types/note";

type NotesCardProps = {
  note: Note;

  onFavoriteToggleAction: (id: string) => void;

  onPinToggleAction: (id: string) => void;

  onDeleteNoteAction: (id: string) => void;

  onEditNoteAction: (note: Note) => void;
};

export default function NotesCard({
  note,
  onFavoriteToggleAction,
  onPinToggleAction,
  onDeleteNoteAction,
  onEditNoteAction,
}: NotesCardProps) {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-xl
      "
    >
      <header className="flex items-start justify-between">

        <div className="min-w-0 flex-1">

          <h3 className="truncate text-lg font-semibold text-white">
            {note.title}
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            Updated {note.updatedAt}
          </p>

        </div>

        <button
          type="button"
          className="
            rounded-lg
            p-2
            text-zinc-500
            transition
            hover:bg-zinc-800
            hover:text-white
          "
        >
          <MoreHorizontal size={18} />
        </button>

      </header>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-400">
        {note.summary ?? note.content}
      </p>

      <footer className="mt-6 flex items-center justify-between">

        <span
          className="
            rounded-lg
            bg-zinc-800
            px-3
            py-1
            text-xs
            text-zinc-300
          "
        >
          {note.folder ?? "General"}
        </span>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={() => onEditNoteAction(note)}
            className="
              rounded-lg
              p-2
              text-zinc-500
              transition
              hover:bg-zinc-800
              hover:text-blue-400
            "
            aria-label="Edit note"
          >
            <Pencil size={16} />
          </button>

          <button
            type="button"
            onClick={() =>
              onFavoriteToggleAction(note.id)
            }
            className="
              rounded-lg
              p-2
              transition
            "
            aria-label="Favorite"
          >
            <Star
              size={16}
              className={
                note.favorite
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-zinc-500"
              }
            />
          </button>

          <button
            type="button"
            onClick={() =>
              onPinToggleAction(note.id)
            }
            className="
              rounded-lg
              p-2
              transition
            "
            aria-label="Pin"
          >
            <Pin
              size={16}
              className={
                note.pinned
                  ? "text-blue-400"
                  : "text-zinc-500"
              }
            />
          </button>

          <button
            type="button"
            onClick={() =>
              onDeleteNoteAction(note.id)
            }
            className="
              rounded-lg
              p-2
              text-zinc-500
              transition
              hover:bg-red-500/10
              hover:text-red-500
            "
            aria-label="Delete note"
          >
            <Trash2 size={16} />
          </button>

        </div>

      </footer>

    </article>
  );
}