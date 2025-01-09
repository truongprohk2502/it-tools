import { Theme } from "@/constants/system";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const isSystemDark = () => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  return matchMedia.matches;
};

const useSystemTheme = () => {
  const { theme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<Theme>(
    theme === "dark" ? Theme.Dark : Theme.Light,
  );

  useEffect(() => {
    if (!theme) {
      setSystemTheme(isSystemDark() ? Theme.Dark : Theme.Light);
    } else {
      setSystemTheme(
        theme === "dark" || isSystemDark() ? Theme.Dark : Theme.Light,
      );
    }
  }, [theme]);

  return systemTheme;
};

export default useSystemTheme;
