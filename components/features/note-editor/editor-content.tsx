"use client";

export default function EditorContent() {
  return (
    <div
      className="
        min-h-[900px]
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-10
      "
    >
      <div className="mx-auto max-w-4xl">

        <input
          type="text"
          placeholder="Start writing..."
          className="
            mb-8
            w-full
            border-none
            bg-transparent
            text-3xl
            font-bold
            text-white
            outline-none
            placeholder:text-zinc-600
          "
        />

        <div
          className="
            min-h-[650px]
            rounded-2xl
            border
            border-dashed
            border-zinc-700
            bg-zinc-950/40
            p-8
          "
        >
          <p className="leading-8 text-zinc-500">
            Start typing your notes here...
          </p>

          <p className="mt-6 leading-8 text-zinc-600">
            Soon this area will become a professional AI-powered rich text editor
            with slash commands, block editing, formatting, AI rewrite,
            summarize, quiz generation and much more.
          </p>
        </div>

      </div>
    </div>
  );
}