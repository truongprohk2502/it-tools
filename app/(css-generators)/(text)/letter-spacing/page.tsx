import type { Metadata } from "next";
import LetterSpacingPage from "./letter-spacing-page";

export const metadata: Metadata = {
  title: "CSS Letter Spacing - IT Tools",
  description: "CSS Letter Spacing generator and preview.",
};

export default function Page() {
  return <LetterSpacingPage />;
}
