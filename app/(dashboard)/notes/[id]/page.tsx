type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NoteDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="space-y-4">

      <h1 className="text-3xl font-bold text-white">
        Note #{id}
      </h1>

      <p className="text-zinc-400">
        AI Note editor will open here.
      </p>

    </div>
  );
}