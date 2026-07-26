"use client";
import SidebarLogo from "./sidebar-logo";
import SidebarItem from "./sidebar-item";

import {
  LayoutDashboard,
  NotebookPen,
  FileText,
  Brain,
  Layers3,
  MessageSquare,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-900">

      <SidebarLogo />

      <nav className="flex-1 space-y-2 p-4">

        <SidebarItem
          href="/dashboard"
          icon={LayoutDashboard}
          title="Dashboard"
        />

        <SidebarItem
          href="/notes"
          icon={NotebookPen}
          title="AI Notes"
        />

        <SidebarItem
          href="/summary"
          icon={FileText}
          title="Summary"
        />

        <SidebarItem
          href="/quiz"
          icon={Brain}
          title="Quiz Generator"
        />

        <SidebarItem
          href="/flashcards"
          icon={Layers3}
          title="Flashcards"
        />

        <SidebarItem
          href="/chat"
          icon={MessageSquare}
          title="AI Chat"
        />

        <SidebarItem
          href="/courses"
          icon={BookOpen}
          title="My Courses"
        />

        <SidebarItem
          href="/progress"
          icon={BarChart3}
          title="Progress"
        />

        <SidebarItem
          href="/settings"
          icon={Settings}
          title="Settings"
        />

      </nav>

      <div className="border-t border-zinc-800 p-4">

        <SidebarItem
          href="/logout"
          icon={LogOut}
          title="Logout"
        />

      </div>

    </aside>
  );
}