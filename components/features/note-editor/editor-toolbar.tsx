"use client";

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  Table,
  Minus,
} from "lucide-react";

const tools = [
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Minus,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  Table,
];

export default function EditorToolbar() {
  return (
    <div
      className="
        sticky
        top-0
        z-20
        flex
        flex-wrap
        gap-2
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/90
        p-4
        backdrop-blur-xl
      "
    >
      {tools.map((Icon, index) => (
        <button
          key={index}
          type="button"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-zinc-400
            transition-all
            duration-200
            hover:bg-blue-600
            hover:text-white
            active:scale-95
          "
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}