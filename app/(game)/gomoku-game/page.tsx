import type { Metadata } from "next";
import GomokuGamePage from "./gomoku-game-page";

export const metadata: Metadata = {
  title: "Gomoku Game - IT Tools",
  description: "Play gomoku game with computer.",
};

export default function Page() {
  return <GomokuGamePage />;
}
