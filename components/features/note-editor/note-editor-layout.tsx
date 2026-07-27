import EditorHeader from "./editor-header";
import EditorToolbar from "./editor-toolbar";
import EditorContent from "./editor-content";
import AISidebar from "./ai-sidebar";

export default function NoteEditorLayout() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

      <main className="space-y-6">

        <EditorHeader />

        <EditorToolbar />

        <EditorContent />

      </main>

      <aside>

        <AISidebar />

      </aside>

    </div>
  );
}