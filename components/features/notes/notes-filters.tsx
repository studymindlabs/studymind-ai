"use client";

import { SlidersHorizontal } from "lucide-react";

export default function NotesFilters() {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/60
        px-5
        py-3
        text-sm
        text-zinc-300
        transition-all
        hover:border-blue-500
      "
    >
      <SlidersHorizontal size={18} />

      Filters
    </button>
  );
}