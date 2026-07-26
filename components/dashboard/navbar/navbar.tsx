export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6">

      <div>
        <h2 className="text-xl font-semibold text-white">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-5">

        <button className="text-2xl">
          🔔
        </button>

        <button className="text-2xl">
          🌙
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          M
        </div>

      </div>

    </header>
  );
}