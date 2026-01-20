"use client";

import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

// CSS Variables dari globals.css - oklch colors
const primaryColors = {
  50: "oklch(0.97 0.03 164)",
  100: "oklch(0.93 0.05 164)",
  200: "oklch(0.88 0.07 164)",
  300: "oklch(0.8 0.1 164)",
  400: "oklch(0.73 0.13 164)",
  500: "oklch(0.67 0.15 164)",
  600: "oklch(0.58 0.14 164)",
  700: "oklch(0.48 0.13 164)",
  800: "oklch(0.38 0.11 164)",
  900: "oklch(0.28 0.09 164)",
  950: "oklch(0.2 0.07 164)",
} as const;

const secondaryColors = {
  50: "oklch(0.98 0.03 85)",
  100: "oklch(0.95 0.06 85)",
  200: "oklch(0.9 0.1 85)",
  300: "oklch(0.84 0.14 85)",
  400: "oklch(0.78 0.16 85)",
  500: "oklch(0.72 0.17 85)",
  600: "oklch(0.62 0.15 85)",
  700: "oklch(0.52 0.13 85)",
  800: "oklch(0.42 0.11 85)",
  900: "oklch(0.32 0.09 85)",
  950: "oklch(0.24 0.07 85)",
} as const;

const themeOverride = createTheme({
  primaryColor: "primary",
  colors: {
    primary: [
      primaryColors[50],
      primaryColors[100],
      primaryColors[200],
      primaryColors[300],
      primaryColors[400],
      primaryColors[500],
      primaryColors[600],
      primaryColors[700],
      primaryColors[800],
      primaryColors[900],
    ],
    secondary: [
      secondaryColors[50],
      secondaryColors[100],
      secondaryColors[200],
      secondaryColors[300],
      secondaryColors[400],
      secondaryColors[500],
      secondaryColors[600],
      secondaryColors[700],
      secondaryColors[800],
      secondaryColors[900],
    ],
  },
  fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif",
  primaryShade: { light: 6, dark: 7 },
  defaultRadius: "md",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

// Export colors untuk digunakan di komponen
export { primaryColors, secondaryColors };
