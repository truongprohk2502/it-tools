import type { Metadata } from "next";
import PicturePuzzlePage from "./picture-puzzle-page";

export const metadata: Metadata = {
  title: "Picture Puzzle - IT Tools",
  description: "Play picture puzzle game with computer.",
};

export default function Page() {
  return <PicturePuzzlePage />;
}
