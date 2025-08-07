import type { Metadata } from "next";
import MemoryGamePage from "./memory-game-page";

export const metadata: Metadata = {
  title: "Memory Game - IT Tools",
  description: "Play Memory game.",
};

export default function Page() {
  return <MemoryGamePage />;
}
