"use client";

type EditorHeaderProps = {
  title: string;
  onTitleChangeAction: (value: string) => void;
};

export default function EditorHeader({
  title,
  onTitleChangeAction,
}: EditorHeaderProps) {
  return (
    <header
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
      "
    >
      <input
        type="text"
        value={title}
        onChange={(e) =>
          onTitleChangeAction(e.target.value)
        }
        placeholder="Untitled Note"
        className="
          w-full
          bg-transparent
          text-3xl
          font-bold
          text-white
          outline-none
          placeholder:text-zinc-500
        "
      />

      <div className="mt-3 flex items-center justify-between">

        <p className="text-sm text-zinc-500">
          Last edited just now
        </p>

        <span
          className="
            rounded-lg
            bg-blue-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-blue-400
          "
        >
          Draft
        </span>

      </div>
    </header>
  );
}