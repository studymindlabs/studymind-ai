import Link from "next/link";

import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "border-b border-zinc-800",
        "bg-zinc-950/90 backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          StudyMind AI
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}