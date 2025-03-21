import type { Metadata } from "next";
import Game2048Page from "./game-2048-page";

export const metadata: Metadata = {
  title: "Game 2048 - IT Tools",
  description: "Play 2048 puzzle game.",
};

export default function Page() {
  return <Game2048Page />;
}
