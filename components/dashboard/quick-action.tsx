"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

type QuickActionProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export default function QuickAction({
  title,
  description,
  href,
  icon: Icon,
}: QuickActionProps) {
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
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white">
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