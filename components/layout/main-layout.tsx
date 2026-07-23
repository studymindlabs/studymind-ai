import type { PropsWithChildren } from "react";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";

interface MainLayoutProps extends PropsWithChildren {
  className?: string;
}

export function MainLayout({
  children,
  className,
}: MainLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-zinc-950 text-white",
        className
      )}
    >
      <Header />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}