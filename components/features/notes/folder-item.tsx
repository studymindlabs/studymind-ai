"use client";

import { Folder } from "lucide-react";

type FolderItemProps = {
  name: string;
  count: number;
  active?: boolean;
};

export default function FolderItem({
  name,
  count,
  active = false,
}: FolderItemProps) {
  return (
    <button
      className={`
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        px-4
        py-3
        transition-all
        duration-200

        ${
          active
            ? "bg-blue-600 text-white"
            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Folder size={18} />
        <span>{name}</span>
      </div>

      <span className="text-xs opacity-70">
        {count}
      </span>
    </button>
  );
}