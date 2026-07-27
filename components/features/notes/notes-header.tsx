"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

type NotesHeaderProps = {
  title?: string;
  description?: string;
};

export default function NotesHeader({
  title = "AI Notes",
  description = "Create, organize and manage all your AI powered notes.",
}: NotesHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          {description}
        </p>
      </div>

      <Link href="/notes/new">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Note
        </Button>
      </Link>
    </div>
  );
}