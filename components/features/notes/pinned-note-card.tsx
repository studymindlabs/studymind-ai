import Link from "next/link";
import { Pin, ArrowRight } from "lucide-react";

type PinnedNoteCardProps = {
  id: string;
  title: string;
  preview: string;
};

export default function PinnedNoteCard({
  id,
  title,
  preview,
}: PinnedNoteCardProps) {
  return (
    <Link
      href={`/notes/${id}`}
      className="
        group
        rounded-2xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-yellow-500/5
        to-zinc-900
        p-5
        transition-all
        duration-300
        hover:border-yellow-400
        hover:shadow-lg
        hover:shadow-yellow-500/10
      "
    >
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2 text-yellow-400">

          <Pin size={16} />

          <span className="text-xs font-semibold uppercase">
            Pinned
          </span>

        </div>

        <ArrowRight
          size={18}
          className="text-zinc-500 transition group-hover:translate-x-1"
        />

      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {preview}
      </p>

    </Link>
  );
}