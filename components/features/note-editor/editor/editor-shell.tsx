"use client";

import { ReactNode } from "react";

type EditorShellProps = {
  toolbar: ReactNode;
  content: ReactNode;
  sidebar: ReactNode;
};

export default function EditorShell({
  toolbar,
  content,
  sidebar,
}: EditorShellProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_320px]">

      <div className="space-y-6">

        {toolbar}

        {content}

      </div>

      <aside className="hidden xl:block">
        {sidebar}
      </aside>

    </div>
  );
}