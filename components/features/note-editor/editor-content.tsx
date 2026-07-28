"use client";

type EditorContentProps = {
  content: string;
  onContentChangeAction: (value: string) => void;
};

export default function EditorContent({
  content,
  onContentChangeAction,
}: EditorContentProps) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
      "
    >
      <textarea
        value={content}
        onChange={(e) =>
          onContentChangeAction(e.target.value)
        }
        placeholder="Start writing your note..."
        className="
          min-h-[500px]
          w-full
          resize-none
          bg-transparent
          text-base
          leading-8
          text-white
          outline-none
          placeholder:text-zinc-500
        "
      />
    </section>
  );
}