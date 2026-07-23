import type { ReactNode } from "react";

export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: string;
    positive?: boolean;
  };
  className?: string;
}