import type { Metadata } from "next";
import CompareTextsPage from "./compare-texts-page";

export const metadata: Metadata = {
  title: "Compare Texts - IT Tools",
  description:
    "Compare text to find the difference between two text files. Just paste your files and click Find Difference.",
};

export default function Page() {
  return <CompareTextsPage />;
}
