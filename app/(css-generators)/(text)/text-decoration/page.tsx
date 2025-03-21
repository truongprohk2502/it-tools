import type { Metadata } from "next";
import TextDecorationPage from "./text-decoration-page";

export const metadata: Metadata = {
  title: "CSS Text Decoration - IT Tools",
  description: "CSS Text Decoration generator and preview.",
};

export default function Page() {
  return <TextDecorationPage />;
}
