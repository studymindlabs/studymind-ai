"use client";

import { Search } from "lucide-react";

type NotesSearchProps = {
  value: string;
  onSearchChangeAction: (value: string) => void;
};

export default function NotesSearch({
  value,
  onSearchChangeAction,
}: NotesSearchProps) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onSearchChangeAction(e.target.value)}
        placeholder="Search notes..."
        className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          py-3
          pl-11
          pr-4
          text-white
          outline-none
          transition
          focus:border-blue-500
        "
      />
    </div>
  );
}