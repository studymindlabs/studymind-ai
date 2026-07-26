"use client";

import { FileSearch } from "lucide-react";
import type { EmptyStateProps } from "./empty-state.types";

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        px-8
        py-14
        text-center
      "
    >
      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-blue-500/10
          text-blue-500
        "
      >
        <FileSearch size={38} />
      </div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-zinc-400">
        {description}
      </p>
    </div>
  );
}