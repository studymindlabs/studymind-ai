import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

type FavoriteNoteCardProps = {
  id: string;
  title: string;
  subject: string;
};

export default function FavoriteNoteCard({
  id,
  title,
  subject,
}: FavoriteNoteCardProps) {
  return (
    <Link
      href={`/notes/${id}`}
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-5
        transition-all
        duration-300
        hover:border-yellow-400
        hover:shadow-lg
        hover:shadow-yellow-500/10
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-yellow-500/10
            text-yellow-400
          "
        >
          <Star size={18} fill="currentColor" />
        </div>

        <div>

          <h3 className="font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm text-zinc-400">
            {subject}
          </p>

        </div>

      </div>

      <ArrowRight
        size={18}
        className="text-zinc-500 transition group-hover:translate-x-1"
      />
    </Link>
  );
}