"use client";

import { MoreHorizontal, Pin, Star } from "lucide-react";

import type { Note } from "@/types/note";

type NotesCardProps = {
  note: Note;
};

export default function NotesCard({
  note,
}: NotesCardProps) {
  return (
    <div
      className="
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
      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold text-white">
            {note.title}
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            {note.updatedAt}
          </p>

        </div>

        <button>
          <MoreHorizontal
            size={18}
            className="text-zinc-500"
          />
        </button>

      </div>

      <p className="mt-4 line-clamp-3 text-sm text-zinc-400">
        {note.summary ?? note.content}
      </p>

      <div className="mt-6 flex items-center justify-between">

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

          {note.pinned && (
            <Pin
              size={15}
              className="text-blue-400"
            />
          )}

          {note.favorite && (
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          )}

        </div>

      </div>

    </div>
  );
}