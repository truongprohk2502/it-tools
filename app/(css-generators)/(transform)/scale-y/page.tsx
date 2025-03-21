import type { Metadata } from "next";
import ScaleYPage from "./scale-y-page";

export const metadata: Metadata = {
  title: "CSS Transform ScaleY - IT Tools",
  description: "CSS Transform ScaleY generator and preview.",
};

export default function Page() {
  return <ScaleYPage />;
}
