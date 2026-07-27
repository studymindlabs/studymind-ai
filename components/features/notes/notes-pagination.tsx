"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NotesPagination() {
  return (
    <div className="mt-8 flex items-center justify-between">

      <button
        className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          border-zinc-800
          bg-zinc-900
          px-4
          py-2
          text-sm
          text-zinc-300
          transition
          hover:border-blue-500
          hover:text-white
        "
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      <div className="flex items-center gap-2">

        <button className="h-10 w-10 rounded-lg bg-blue-600 text-white">
          1
        </button>

        <button className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white">
          2
        </button>

        <button className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white">
          3
        </button>

      </div>

      <button
        className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          border-zinc-800
          bg-zinc-900
          px-4
          py-2
          text-sm
          text-zinc-300
          transition
          hover:border-blue-500
          hover:text-white
        "
      >
        Next
        <ChevronRight size={16} />
      </button>

    </div>
  );
}