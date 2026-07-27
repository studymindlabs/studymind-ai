"use client";

import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyState() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-zinc-800
        bg-zinc-900/40
        py-20
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
          bg-blue-600/10
        "
      >
        <FileText
          className="text-blue-500"
          size={36}
        />
      </div>

      <h2 className="text-2xl font-bold text-white">
        No notes yet
      </h2>

      <p className="mt-3 max-w-md text-zinc-400">
        Create your first AI note and start organizing your learning journey.
      </p>

      <Button className="mt-8 gap-2">
        <Plus size={18} />
        Create First Note
      </Button>
    </div>
  );
}