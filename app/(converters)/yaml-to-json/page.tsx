import type { Metadata } from "next";
import YamlToJsonPage from "./yaml-to-json-page";

export const metadata: Metadata = {
  title: "YAML to JSON - IT Tools",
  description:
    "Convert YAML (YAML Ain't Markup Language) to JSON (JavaScript Object Notation).",
};

export default function Page() {
  return <YamlToJsonPage />;
}
