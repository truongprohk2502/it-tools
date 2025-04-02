import type { Metadata } from "next";
import SnakeGamePage from "./snake-game-page";

export const metadata: Metadata = {
  title: "Snake Game - IT Tools",
  description: "Play Snake game.",
};

export default function Page() {
  return <SnakeGamePage />;
}
