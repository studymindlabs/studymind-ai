import type { PropsWithChildren } from "react";

export interface ProgressCardProps extends PropsWithChildren {
  title: string;
  value: number;
  max: number;
  description?: string;
  className?: string;
}