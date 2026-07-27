"use client";

import { Search } from "lucide-react";

type NotesSearchProps = {
  placeholder?: string;
};

export default function NotesSearch({
  placeholder = "Search notes...",
}: NotesSearchProps) {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        size={18}
      />

      <input
        type="text"
        placeholder={placeholder}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          pl-11
          pr-20
          text-sm
          text-white
          placeholder:text-zinc-500
          outline-none
          transition
          focus:border-blue-500
        "
      />

      <div
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          rounded-md
          border
          border-zinc-700
          bg-zinc-800
          px-2
          py-1
          text-xs
          text-zinc-400
        "
      >
        Ctrl K
      </div>

    </div>
  );
}