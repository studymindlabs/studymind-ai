import EmptyState from "@/components/ui/empty-state";

export default function NotesEmpty() {
  return (
    <EmptyState
      title="No notes yet"
      description="Create your first AI note to start building your knowledge library."
    />
  );
}