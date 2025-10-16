"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // props içinde attribute, defaultTheme, enableSystem vb. var
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
