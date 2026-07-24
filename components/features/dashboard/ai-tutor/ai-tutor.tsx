import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { AiTutorProps } from "./ai-tutor.types";

export function AiTutor({
  className,
}: AiTutorProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900 p-6",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-3xl">🤖</span>

          <h2 className="mt-3 text-2xl font-bold text-white">
            AI Tutor
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Ask anything and get instant AI-powered learning
            assistance.
          </p>
        </div>

        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          Online
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-300">
          💡 Explain React Hooks with examples.
        </div>

        <div className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-300">
          📘 Create a JavaScript study plan.
        </div>

        <div className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-300">
          🚀 Help me prepare for my next quiz.
        </div>
      </div>

      <Button
        className="mt-6 w-full"
      >
        Start AI Tutor
      </Button>
    </section>
  );
}