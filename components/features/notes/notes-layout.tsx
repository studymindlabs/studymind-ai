import { ReactNode } from "react";
import NotesSidebar from "./notes-sidebar";

type NotesLayoutProps = {
  children: ReactNode;
};

export default function NotesLayout({
  children,
}: NotesLayoutProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

      <NotesSidebar />

      {children}

    </div>
  );
}