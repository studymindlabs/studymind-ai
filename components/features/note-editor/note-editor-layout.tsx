"use client";

import { useEffect, useMemo, useState } from "react";

import EditorHeader from "./editor-header";
import EditorToolbar from "./editor-toolbar";
import EditorContent from "./editor-content";
import AISidebar from "./ai-sidebar";

import { EMPTY_NOTE } from "./note-editor.constants";
import type { EditorState } from "./note-editor.types";

import { createNote } from "@/lib/utils/create-note";
import { useNotesStore } from "@/lib/stores/notes-store";

export default function NoteEditorLayout() {
  const addNote = useNotesStore(
    (state) => state.addNote
  );

  const updateNote = useNotesStore(
    (state) => state.updateNote
  );

  const editingNote = useNotesStore(
    (state) => state.editingNote
  );

  const setEditingNote = useNotesStore(
    (state) => state.setEditingNote
  );

  const [editor, setEditor] = useState<EditorState>({
    ...EMPTY_NOTE,
    isDirty: false,
  });

  useEffect(() => {
    if (!editingNote) return;

    setEditor({
      title: editingNote.title,
      content: editingNote.content,
      isDirty: false,
    });
  }, [editingNote]);

  const hasChanges = useMemo(
    () => editor.isDirty,
    [editor.isDirty]
  );

  function updateTitle(title: string) {
    setEditor((prev) => ({
      ...prev,
      title,
      isDirty: true,
    }));
  }

  function updateContent(content: string) {
    setEditor((prev) => ({
      ...prev,
      content,
      isDirty: true,
    }));
  }

  function clearEditor() {
    setEditor({
      ...EMPTY_NOTE,
      isDirty: false,
    });

    setEditingNote(null);
  }

  function handleCancelAction() {
    clearEditor();
  }

  function handleSaveAction() {
    if (
      editor.title.trim() === "" &&
      editor.content.trim() === ""
    ) {
      return;
    }

    if (editingNote) {
      updateNote(
        createNote(
          editor.title,
          editor.content,
          editingNote.id,
          editingNote.createdAt
        )
      );
    } else {
      addNote(
        createNote(
          editor.title,
          editor.content
        )
      );
    }

    clearEditor();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

      <main className="space-y-6">

        <EditorHeader
          title={editor.title}
          onTitleChangeAction={updateTitle}
        />

        <EditorToolbar
          hasChanges={hasChanges}
          onSaveAction={handleSaveAction}
          onCancelAction={handleCancelAction}
        />

        <EditorContent
          content={editor.content}
          onContentChangeAction={updateContent}
        />

      </main>

      <aside>
        <AISidebar />
      </aside>

    </div>
  );
}