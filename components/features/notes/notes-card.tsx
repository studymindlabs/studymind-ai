"use client";

import { MoreHorizontal, Star } from "lucide-react";

type NotesCardProps = {
  title: string;
  preview: string;
  updatedAt: string;
  category: string;
  favorite?: boolean;
};

export default function NotesCard({
  title,
  preview,
  updatedAt,
  category,
  favorite = false,
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
            {title}
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            {updatedAt}
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
        {preview}
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
          {category}
        </span>

        {favorite && (
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        )}

      </div>

    </div>
  );
}