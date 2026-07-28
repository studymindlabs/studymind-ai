"use client";

const filters = [
  "All",
  "Recent",
  "Favorites",
  "Archived",
];

export default function NotesFilter() {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`
            rounded-lg
            border
            px-4
            py-2
            text-sm
            transition-all

            ${
              index === 0
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white"
            }
          `}
        >
          {filter}
        </button>
      ))}

    </div>
  );
}