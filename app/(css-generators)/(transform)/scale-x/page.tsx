import type { Metadata } from "next";
import ScaleXPage from "./scale-x-page";

export const metadata: Metadata = {
  title: "CSS Transform ScaleX - IT Tools",
  description: "CSS Transform ScaleX generator and preview.",
};

export default function Page() {
  return <ScaleXPage />;
}
