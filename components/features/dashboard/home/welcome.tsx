export default function Welcome() {
  const userName = "Monsur";

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900 to-blue-950 p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-blue-400 font-medium">
            👋 {greeting}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Welcome back,
            <span className="text-blue-500">
              {" "}
              {userName}
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Continue your learning journey.
            Create notes, generate quizzes,
            summarize PDFs and study smarter
            with AI.
          </p>

        </div>

        <div className="hidden md:flex">

          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-5">

            <p className="text-sm text-orange-300">
              🔥 Learning Streak
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              15 Days
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}