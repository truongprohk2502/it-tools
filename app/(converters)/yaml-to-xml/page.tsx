import type { Metadata } from "next";
import YamlToXmlPage from "./yaml-to-xml-page";

export const metadata: Metadata = {
  title: "YAML to XML - IT Tools",
  description:
    "Convert YAML (YAML Ain't Markup Language) to XML (eXtensible Markup Language).",
};

export default function Page() {
  return <YamlToXmlPage />;
}
