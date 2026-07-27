import {
  NotesLayout,
  NotesHeader,
  NotesSearch,
  NotesFilter,
  NotesGrid,
  NotesPagination,
} from "@/components/features/notes";

export default function NotesPage() {
  return (
    <NotesLayout>
      <NotesHeader />

      <NotesSearch />

      <NotesFilter />

      <NotesGrid />

      <NotesPagination />
    </NotesLayout>
  );
}