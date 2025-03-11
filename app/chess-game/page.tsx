import type { Metadata } from "next";
import ChessGamePage from "./chess-game-page";

export const metadata: Metadata = {
  title: "Chess Game - IT Tools",
  description: "Play chess game with computer.",
};

export default function Page() {
  return <ChessGamePage />;
}
