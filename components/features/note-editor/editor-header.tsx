"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function EditorHeader() {
  return (
    <header
      className="
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-6
      "
    >
      <div className="flex items-center justify-between">

        <Link
          href="/notes"
          className="
            flex
            items-center
            gap-2
            text-zinc-400
            transition
            hover:text-white
          "
        >
          <ArrowLeft size={18} />

          Back to Notes
        </Link>

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-emerald-400
          "
        >
          <CheckCircle2 size={16} />

          Auto Saved
        </div>

      </div>

      <input
        type="text"
        placeholder="Untitled Note"
        className="
          bg-transparent
          text-5xl
          font-bold
          text-white
          outline-none
          placeholder:text-zinc-600
        "
      />

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <p className="text-sm text-zinc-500">
          Last edited • Just now
        </p>

        <div className="flex gap-3">

          <button
            className="
              rounded-xl
              border
              border-zinc-700
              px-5
              py-2.5
              text-sm
              text-zinc-300
              transition
              hover:border-white
              hover:text-white
            "
          >
            Save Draft
          </button>

          <button
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-500
            "
          >
            Publish
          </button>

        </div>

      </div>

    </header>
  );
}