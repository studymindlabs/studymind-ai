"use client";

import { RotateCcw, Save } from "lucide-react";

type EditorToolbarProps = {
  hasChanges: boolean;
  onSaveAction: () => void;
  onCancelAction: () => void;
};

export default function EditorToolbar({
  hasChanges,
  onSaveAction,
  onCancelAction,
}: EditorToolbarProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-4
      "
    >
      <div className="text-sm text-zinc-400">
        {hasChanges
          ? "Unsaved changes"
          : "All changes saved"}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onCancelAction}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-zinc-700
            px-4
            py-2
            text-sm
            text-zinc-300
            transition
            hover:bg-zinc-800
          "
        >
          <RotateCcw size={16} />
          Cancel
        </button>

        <button
          type="button"
          onClick={onSaveAction}
          disabled={!hasChanges}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <Save size={16} />
          Save
        </button>
      </div>
    </div>
  );
}