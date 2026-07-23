import { designTokens } from "./design-tokens";

export const lightTheme = {
  colors: designTokens.colors,
  radius: designTokens.radius,
  spacing: designTokens.spacing,
  fontSize: designTokens.fontSize,
} as const;

export type Theme = typeof lightTheme;