import { BrainCircuit } from "lucide-react";

export default function SidebarLogo() {
  return (
    <div className="border-b border-zinc-800 p-6">

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">

          <BrainCircuit
            size={26}
            className="text-white"
          />

        </div>

        <div>

          <h1 className="text-lg font-bold text-white">
            StudyMind AI
          </h1>

          <p className="text-xs text-zinc-400">
            Smart Learning Platform
          </p>

        </div>

      </div>

    </div>
  );
}