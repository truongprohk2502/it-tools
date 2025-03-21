import type { Metadata } from "next";
import RotatePage from "./rotate-page";

export const metadata: Metadata = {
  title: "CSS Transform Rotate - IT Tools",
  description: "CSS Transform Rotate generator and preview.",
};

export default function Page() {
  return <RotatePage />;
}
