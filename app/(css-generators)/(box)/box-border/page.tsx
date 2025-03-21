import type { Metadata } from "next";
import BoxBorderPage from "./box-border-page";

export const metadata: Metadata = {
  title: "CSS Border - IT Tools",
  description: "CSS Border generator and preview.",
};

export default function Page() {
  return <BoxBorderPage />;
}
