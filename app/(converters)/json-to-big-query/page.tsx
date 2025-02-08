import type { Metadata } from "next";
import JsonToBigQueryPage from "./json-to-big-query-page";

export const metadata: Metadata = {
  title: "JSON to BigQuery - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to BigQuery schema.",
};

export default function Page() {
  return <JsonToBigQueryPage />;
}
