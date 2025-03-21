import type { Metadata } from "next";
import FontSizePage from "./font-size-page";

export const metadata: Metadata = {
  title: "CSS Font Size - IT Tools",
  description: "CSS Font Size generator and preview.",
};

export default function Page() {
  return <FontSizePage />;
}
