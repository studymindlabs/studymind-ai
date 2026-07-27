import { Note } from "@/types/note";

export const mockNotes: Note[] = [
  {
    id: "1",
    title: "AI Prompt Engineering",
    content: "Introduction to prompt engineering...",
    summary: "Learn prompt engineering basics.",
    folder: "AI",
    favorite: true,
    pinned: true,
    status: "draft",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
  },
  {
    id: "2",
    title: "Database Design",
    content: "Learn PostgreSQL fundamentals...",
    summary: "Database basics.",
    folder: "Backend",
    favorite: false,
    pinned: false,
    status: "draft",
    createdAt: "2026-07-18",
    updatedAt: "2026-07-18",
  },
];