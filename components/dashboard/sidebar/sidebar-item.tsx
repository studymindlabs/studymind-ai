"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  href: string;
  icon: LucideIcon;
  title: string;
};

export default function SidebarItem({
  href,
  icon: Icon,
  title,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`
        group flex items-center gap-3 rounded-xl
        px-4 py-3 transition-all duration-200

        ${
          active
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        }
      `}
    >
      <Icon
        size={20}
        className="shrink-0"
      />

      <span className="font-medium">
        {title}
      </span>
    </Link>
  );
}