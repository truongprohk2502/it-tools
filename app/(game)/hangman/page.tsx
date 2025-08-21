import type { Metadata } from "next";
import HangmanPage from "./hangman-page";

export const metadata: Metadata = {
  title: "Hangman Game - IT Tools",
  description: "Play Hangman game.",
};

export default function Page() {
  return <HangmanPage />;
}
