import type { Metadata } from "next";
import TomlToXmlPage from "./toml-to-xml-page";

export const metadata: Metadata = {
  title: "TOML to XML - IT Tools",
  description:
    "Convert TOML (Tom's Obvious, Minimal Language) to XML (eXtensible Markup Language).",
};

export default function Page() {
  return <TomlToXmlPage />;
}
