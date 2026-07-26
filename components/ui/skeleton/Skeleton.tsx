"use client";

import type { SkeletonProps } from "./skeleton.types";

export default function Skeleton({
  className = "",
}: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse
        rounded-xl
        bg-zinc-800/80
        ${className}
      `}
    />
  );
}