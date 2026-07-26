export default function Welcome() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        via-[#14182b]
        to-blue-950
        p-8
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-2xl">

          <p className="mb-3 text-sm font-medium text-blue-400">
            👋 Good Afternoon
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white">
            Welcome back,
            <span className="text-blue-500"> Monsur</span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400 leading-7">
            Continue mastering your learning journey with AI.
            Create notes, summarize PDFs, generate quizzes,
            chat with your AI tutor and stay productive every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              ✨ AI Powered
            </div>

            <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              🚀 Personalized Learning
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              📚 Smart Progress
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6">

            <p className="text-sm text-orange-300">
              🔥 Learning Streak
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              15
            </h2>

            <p className="text-sm text-zinc-400">
              Days
            </p>

          </div>

          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">

            <p className="text-sm text-green-300">
              🎯 Weekly Goal
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              82%
            </h2>

            <p className="text-sm text-zinc-400">
              Completed
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}