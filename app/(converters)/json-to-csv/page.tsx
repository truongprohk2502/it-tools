import type { Metadata } from "next";
import JsonToCsvPage from "./json-to-csv-page";

export const metadata: Metadata = {
  title: "JSON to CSV - IT Tools",
  description:
    "Convert JSON (JavaScript Object Notation) to CSV (Comma Separated Values).",
};

export default function Page() {
  return <JsonToCsvPage />;
}
