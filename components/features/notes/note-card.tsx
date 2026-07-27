import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

type NoteCardProps = {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
};

export default function NoteCard({
  id,
  title,
  preview,
  updatedAt,
}: NoteCardProps) {
  return (
    <Link
      href={`/notes/${id}`}
      className="
        group
        block
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/50
        hover:shadow-[0_0_30px_rgba(59,130,246,.15)]
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div className="space-y-3 flex-1">

          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
            {preview}
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-500">

            <CalendarDays size={14} />

            {updatedAt}

          </div>

        </div>

        <ArrowRight
          size={20}
          className="text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400"
        />

      </div>
    </Link>
  );
}