"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col">
      The current theme is: {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Mode
      </button>
    </div>
  );
}
