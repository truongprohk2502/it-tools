import type { Metadata } from "next";
import TextColorPage from "./text-color-page";

export const metadata: Metadata = {
  title: "CSS Text Color - IT Tools",
  description: "CSS Text Color generator and preview.",
};

export default function Page() {
  return <TextColorPage />;
}
