"use client";

const folders = [
  "All",
  "AI",
  "Backend",
  "Programming",
];

type NotesFilterProps = {
  selectedFolder: string;
  onFolderChangeAction: (folder: string) => void;
};

export default function NotesFilter({
  selectedFolder,
  onFolderChangeAction,
}: NotesFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {folders.map((folder) => {
        const active = selectedFolder === folder;

        return (
          <button
            key={folder}
            type="button"
            onClick={() => onFolderChangeAction(folder)}
            className={[
              "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
              active
                ? "bg-blue-600 text-white"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800",
            ].join(" ")}
          >
            {folder}
          </button>
        );
      })}
    </div>
  );
}