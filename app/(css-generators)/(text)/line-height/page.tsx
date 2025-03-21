import type { Metadata } from "next";
import LineHeightPage from "./line-height-page";

export const metadata: Metadata = {
  title: "CSS Line Height - IT Tools",
  description: "CSS Line Height generator and preview.",
};

export default function Page() {
  return <LineHeightPage />;
}
