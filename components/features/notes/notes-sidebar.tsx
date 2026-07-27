import FolderItem from "./folder-item";

export default function NotesSidebar() {
  return (
    <aside
      className="
        space-y-3
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-5
      "
    >
      <h3 className="font-semibold text-white">
        Folders
      </h3>

      <FolderItem
        name="All Notes"
        count={24}
        active
      />

      <FolderItem
        name="Physics"
        count={8}
      />

      <FolderItem
        name="Business"
        count={5}
      />

      <FolderItem
        name="Programming"
        count={11}
      />
    </aside>
  );
}