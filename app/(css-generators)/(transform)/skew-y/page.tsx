import type { Metadata } from "next";
import SkewYPage from "./skew-y-page";

export const metadata: Metadata = {
  title: "CSS Transform SkewY - IT Tools",
  description: "CSS Transform SkewY generator and preview.",
};

export default function Page() {
  return <SkewYPage />;
}
