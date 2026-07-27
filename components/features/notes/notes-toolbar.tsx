import NotesSearch from "./notes-search";
import NotesFilters from "./notes-filters";

export default function NotesToolbar() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">

      <NotesSearch />

      <NotesFilters />

    </div>
  );
}