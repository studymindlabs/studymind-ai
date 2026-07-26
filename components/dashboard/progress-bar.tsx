type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({
  value,
}: ProgressBarProps) {
  return (
    <div className="space-y-2">

      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-400">
          Weekly Progress
        </span>

        <span className="font-semibold text-white">
          {value}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-500
            to-violet-500
            transition-all
            duration-700
          "
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}