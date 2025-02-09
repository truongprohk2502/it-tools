import type { Metadata } from "next";
import JsonToJsonSchemaPage from "./json-to-json-schema-page";

export const metadata: Metadata = {
  title: "JSON to JSON Schema - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to JSON schema.",
};

export default function Page() {
  return <JsonToJsonSchemaPage />;
}
