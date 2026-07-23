import Link from "next/link";

import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "AI Tutor",
    href: "/ai-tutor",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

export function Sidebar({
  className,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "hidden w-64 shrink-0 border-r border-zinc-800 bg-zinc-950 lg:block",
        className
      )}
    >
      <div className="flex h-full flex-col p-6">
        <h2 className="mb-8 text-lg font-semibold text-white">
          Navigation
        </h2>

        <nav className="flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}