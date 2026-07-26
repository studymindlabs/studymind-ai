"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AIAssistantCard() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-blue-500/30
        bg-gradient-to-br
        from-blue-950/70
        to-zinc-900
        p-6
        shadow-lg
      "
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-600 p-3 text-white">
          <Sparkles size={22} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            AI Study Assistant
          </h3>

          <p className="text-sm text-zinc-400">
            Personalized recommendations
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">

        <div className="rounded-xl bg-zinc-900/70 p-3">
          <p className="text-sm text-zinc-300">
            📚 Continue Chapter 4 of Prompt Engineering.
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900/70 p-3">
          <p className="text-sm text-zinc-300">
            🧠 Review yesterday's Flashcards.
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900/70 p-3">
          <p className="text-sm text-zinc-300">
            ✅ You're only 2 quizzes away from your weekly goal.
          </p>
        </div>

      </div>

      <Link
        href="/chat"
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-blue-600
          px-4
          py-2
          text-sm
          font-medium
          text-white
          transition
          hover:bg-blue-500
        "
      >
        Ask AI
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}