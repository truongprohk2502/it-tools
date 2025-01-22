import type { Metadata } from "next";
import TerminalSource from "./terminal-source";

export const metadata: Metadata = {
  title: "UI Terminal - IT Tools",
  description: "UI Terminal component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TerminalSource />;
}
