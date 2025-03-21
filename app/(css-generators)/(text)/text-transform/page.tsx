import type { Metadata } from "next";
import TextTransformPage from "./text-transform-page";

export const metadata: Metadata = {
  title: "CSS Text Transform - IT Tools",
  description: "CSS Text Transform generator and preview.",
};

export default function Page() {
  return <TextTransformPage />;
}
