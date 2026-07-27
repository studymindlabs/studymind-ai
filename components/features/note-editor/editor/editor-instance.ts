import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Image from "@tiptap/extension-image";

export const editorExtensions = [
  StarterKit,

  Placeholder.configure({
    placeholder: "Start writing your notes...",
  }),

  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),

  Highlight,

  TaskList,

  TaskItem.configure({
    nested: true,
  }),

  Image,
];