import type { Metadata } from "next";
import JsonToXmlPage from "./json-to-xml-page";

export const metadata: Metadata = {
  title: "JSON to XML - IT Tools",
  description:
    "Convert JSON (JavaScript Object Notation) to XML (eXtensible Markup Language).",
};

export default function Page() {
  return <JsonToXmlPage />;
}
