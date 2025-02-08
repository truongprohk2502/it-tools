import type { Metadata } from "next";
import JsonToIOTSPage from "./json-to-iots-page";

export const metadata: Metadata = {
  title: "JSON to IO-TS - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to IO-TS type.",
};

export default function Page() {
  return <JsonToIOTSPage />;
}
