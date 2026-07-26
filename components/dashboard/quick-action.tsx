"use client";

import Link from "next/link";

import {
  NotebookPen,
  FileText,
  Brain,
  Layers3,
  MessageSquare,
  BookOpen,
} from "lucide-react";

type IconName =
  | "notes"
  | "summary"
  | "quiz"
  | "flashcards"
  | "chat"
  | "courses";

type QuickActionProps = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export default function QuickAction({
  title,
  description,
  href,
  icon,
}: QuickActionProps) {

  const Icon = (() => {
    switch (icon) {
      case "notes":
        return NotebookPen;

      case "summary":
        return FileText;

      case "quiz":
        return Brain;

      case "flashcards":
        return Layers3;

      case "chat":
        return MessageSquare;

      case "courses":
        return BookOpen;

      default:
        return NotebookPen;
    }
  })();

  return (
    <Link
      href={href}
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-5
        transition-all
        duration-300
        hover:border-blue-500
        hover:bg-zinc-900
        hover:shadow-xl
      "
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition-all group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </Link>
  );
}