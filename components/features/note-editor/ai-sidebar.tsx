"use client";

import {
  Sparkles,
  FileText,
  Brain,
 BookOpen,
  Languages,
  Wand2,
} from "lucide-react";

const actions = [
  {
    title: "Summarize",
    icon: FileText,
  },
  {
    title: "Rewrite",
    icon: Wand2,
  },
  {
    title: "Expand",
    icon: Sparkles,
  },
  {
    title: "Generate Quiz",
    icon: Brain,
  },
  {
    title: "Flashcards",
    icon: BookOpen,
  },
  {
    title: "Translate",
    icon: Languages,
  },
];

export default function AISidebar() {
  return (
    <aside
      className="
        sticky
        top-6
        space-y-6
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-6
      "
    >
      <div>

        <h2 className="text-xl font-bold text-white">
          AI Assistant
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Improve your notes instantly using AI.
        </p>

      </div>

      <textarea
        placeholder="Ask AI anything..."
        className="
          min-h-[120px]
          w-full
          resize-none
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950
          p-4
          text-white
          outline-none
          transition
          focus:border-blue-500
          placeholder:text-zinc-600
        "
      />

      <button
        className="
          w-full
          rounded-2xl
          bg-blue-600
          py-3
          font-medium
          text-white
          transition
          hover:bg-blue-500
        "
      >
        Ask AI
      </button>

      <div className="space-y-3">

        {actions.map(({ title, icon: Icon }) => (
          <button
            key={title}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              border
              border-zinc-800
              bg-zinc-950
              px-4
              py-3
              text-left
              text-sm
              text-zinc-300
              transition-all
              hover:border-blue-500
              hover:bg-zinc-900
              hover:text-white
            "
          >
            <Icon size={18} />

            {title}
          </button>
        ))}

      </div>

    </aside>
  );
}