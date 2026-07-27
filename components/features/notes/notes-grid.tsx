"use client";

import NotesCard from "./notes-card";

export default function NotesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <NotesCard
        title="Physics Chapter 1"
        preview="Force, motion and Newton's laws summary..."
        updatedAt="Edited 15 min ago"
        category="Physics"
        favorite
      />

      <NotesCard
        title="Biology Notes"
        preview="Cell structure and functions..."
        updatedAt="Yesterday"
        category="Biology"
      />

      <NotesCard
        title="Mathematics"
        preview="Important integration formulas..."
        updatedAt="2 days ago"
        category="Math"
      />

    </div>
  );
}