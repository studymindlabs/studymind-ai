import type { Note } from "@/types/note";

export function createNote(
  title: string,
  content: string,
  existingId?: string,
  createdAt?: string
): Note {

  const now = new Date().toISOString();

  return {

    id: existingId ?? crypto.randomUUID(),

    title,

    content,

    summary: content.slice(0, 120),

    folder: "General",

    favorite: false,

    pinned: false,

    status: "draft",

    createdAt: createdAt ?? now,

    updatedAt: now,

  };
}