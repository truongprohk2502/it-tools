import type { Metadata } from "next";
import TerminalPage from "./_components/terminal-page";

export const metadata: Metadata = {
  title: "UI Terminal - IT Tools",
  description: "UI Terminal component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TerminalPage />;
}
