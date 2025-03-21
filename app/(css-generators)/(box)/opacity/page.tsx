import type { Metadata } from "next";
import OpacityPage from "./opacity-page";

export const metadata: Metadata = {
  title: "CSS Opacity - IT Tools",
  description: "CSS Opacity generator and preview.",
};

export default function Page() {
  return <OpacityPage />;
}
