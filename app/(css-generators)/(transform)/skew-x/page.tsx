import type { Metadata } from "next";
import SkewXPage from "./skew-x-page";

export const metadata: Metadata = {
  title: "CSS Transform SkewX - IT Tools",
  description: "CSS Transform SkewX generator and preview.",
};

export default function Page() {
  return <SkewXPage />;
}
