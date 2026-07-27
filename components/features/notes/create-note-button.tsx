"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreateNoteButton() {
  return (
    <Link
      href="/notes/new"
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-blue-600
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-500
        hover:shadow-lg
        hover:shadow-blue-500/20
      "
    >
      <Plus size={18} />

      Create Note
    </Link>
  );
}