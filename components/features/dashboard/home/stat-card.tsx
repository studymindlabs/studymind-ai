"use client";

import CountUp from "react-countup";
import {
  NotebookPen,
  Brain,
  BookOpen,
  Flame,
} from "lucide-react";

type IconName =
  | "NotebookPen"
  | "Brain"
  | "BookOpen"
  | "Flame";

type StatCardProps = {
  title: string;
  value: number;
  suffix?: string;
  subtitle: string;
  icon: IconName;
};

const icons = {
  NotebookPen,
  Brain,
  BookOpen,
  Flame,
};

export default function StatCard({
  title,
  value,
  suffix = "",
  subtitle,
  icon,
}: StatCardProps) {
  const Icon = icons[icon];

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900/70
      backdrop-blur-xl
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500/50
      hover:shadow-[0_0_35px_rgba(59,130,246,.18)]
    "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-tight text-white">
            <CountUp
              end={value}
              duration={2}
            />
            {suffix}
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            {subtitle}
          </p>
        </div>

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-600/10
          text-blue-500
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-blue-600
          group-hover:text-white
        "
        >
          <Icon size={26} />
        </div>
      </div>
    </div>
  );
}