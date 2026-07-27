"use client";

import { Search } from "lucide-react";

export default function NotesSearch() {
  return (
    <div className="relative flex-1">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search notes..."
        className="
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/60
          py-3
          pl-11
          pr-4
          text-white
          outline-none
          transition-all
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          placeholder:text-zinc-500
        "
      />

    </div>
  );
}