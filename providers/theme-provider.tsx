"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider> & {
  children: React.ReactNode;
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
