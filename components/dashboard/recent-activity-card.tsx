"use client";

import {
  NotebookPen,
  Brain,
  MessageSquare,
  Layers3,
} from "lucide-react";

type IconName =
  | "NotebookPen"
  | "Brain"
  | "MessageSquare"
  | "Layers3";

type RecentActivityCardProps = {
  title: string;
  time: string;
  icon: IconName;
};

const icons = {
  NotebookPen,
  Brain,
  MessageSquare,
  Layers3,
};

export default function RecentActivityCard({
  title,
  time,
  icon,
}: RecentActivityCardProps) {
  const Icon = icons[icon];

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-4
        transition-all
        duration-300
        hover:border-blue-500
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-500">
          <Icon size={20} />
        </div>

        <div>
          <p className="font-medium text-white">
            {title}
          </p>

          <p className="text-xs text-zinc-400">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}