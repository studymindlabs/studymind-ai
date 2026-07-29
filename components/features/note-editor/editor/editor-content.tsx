"use client";

import { useEditor, EditorContent as Tiptap } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useEffect } from "react";

import type { EditorContentProps } from "./editor.types";

export default function EditorContent({
  content,
  onChangeAction,
}: EditorContentProps) {
  const editor = useEditor({
    extensions: [StarterKit],

    content,

    immediatelyRender: false,

    onUpdate({ editor }) {
      onChangeAction(editor.getHTML());
    },
  });

  useEffect(() => {
  if (!editor) return;

  if (editor.getHTML() !== content) {
    editor.commands.setContent(content);
  }
}, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div
      className="
        min-h-[420px]
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
      "
    >
      <Tiptap
        editor={editor}
        className="prose prose-invert max-w-none outline-none"
      />
    </div>
  );
}