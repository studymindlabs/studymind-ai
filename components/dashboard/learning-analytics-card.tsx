import ProgressBar from "./progress-bar";

export default function LearningAnalyticsCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur-xl
        p-6
      "
    >

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-sm text-blue-400">
            📈 Learning Analytics
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            This Week
          </h2>

        </div>

        <div
          className="
            rounded-2xl
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-blue-400
            font-semibold
          "
        >
          Level 4
        </div>

      </div>

      <ProgressBar value={72} />

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-zinc-800/60 p-4">

          <p className="text-xs text-zinc-500">
            Study Time
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            12h
          </h3>

        </div>

        <div className="rounded-2xl bg-zinc-800/60 p-4">

          <p className="text-xs text-zinc-500">
            Lessons
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            18
          </h3>

        </div>

        <div className="rounded-2xl bg-zinc-800/60 p-4">

          <p className="text-xs text-zinc-500">
            AI Score
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-400">
            94%
          </h3>

        </div>

      </div>

    </div>
  );
}