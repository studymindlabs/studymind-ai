"use client";

import { ReactNode } from "react";

type EditorProviderProps = {
  children: ReactNode;
};

export default function EditorProvider({
  children,
}: EditorProviderProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-10
      "
    >
      {children}
    </div>
  );
}