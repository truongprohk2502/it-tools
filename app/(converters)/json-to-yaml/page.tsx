import type { Metadata } from "next";
import JsonToYamlPage from "./json-to-yaml-page";

export const metadata: Metadata = {
  title: "JSON to YAML - IT Tools",
  description:
    "Convert JSON (JavaScript Object Notation) to YAML (YAML Ain't Markup Language).",
};

export default function Page() {
  return <JsonToYamlPage />;
}
