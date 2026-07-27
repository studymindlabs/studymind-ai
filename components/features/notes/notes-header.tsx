import { Search } from "lucide-react";
import CreateNoteButton from "./create-note-button";

export default function NotesHeader() {
  return (
    <section className="space-y-6">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-white">
            AI Notes
          </h1>

          <p className="mt-2 text-zinc-400">
            Create, organize and improve your notes with AI.
          </p>

        </div>

        <CreateNoteButton />

      </div>

      <div
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/70
          px-5
          py-4
          transition-all
          duration-300
          focus-within:border-blue-500
          focus-within:ring-2
          focus-within:ring-blue-500/20
        "
      >

        <Search
          size={20}
          className="text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="
            w-full
            bg-transparent
            text-white
            outline-none
            placeholder:text-zinc-500
          "
        />

      </div>

    </section>
  );
}