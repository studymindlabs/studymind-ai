"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ContinueLearningCardProps = {
  title: string;
  progress: number;
  lastOpened: string;
  href: string;
};

export default function ContinueLearningCard({
  title,
  progress,
  lastOpened,
  href,
}: ContinueLearningCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            Continue Learning
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {title}
          </h3>
        </div>

        <span className="text-lg font-bold text-blue-500">
          {progress}%
        </span>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          Last opened {lastOpened}
        </span>

        <Link
          href={href}
          className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400"
        >
          Resume

          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}