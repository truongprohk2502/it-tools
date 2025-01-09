import { Theme } from "@/constants/system";
import { useTheme } from "next-themes";
import useDomLoaded from "./use-dom-loaded";

const isSystemDark = () => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  return matchMedia.matches;
};

const useSystemTheme = () => {
  const { theme } = useTheme();
  const domLoaded = useDomLoaded();

  return theme === "system" && domLoaded
    ? isSystemDark()
      ? Theme.Dark
      : Theme.Light
    : theme === "dark"
      ? Theme.Dark
      : Theme.Light;
};

export default useSystemTheme;
