"use client";

import { ReactNode } from "react";

type NotesLayoutProps = {
  children: ReactNode;
};

export default function NotesLayout({
  children,
}: NotesLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-6">
      {children}
    </div>
  );
}