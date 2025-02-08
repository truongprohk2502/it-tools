import type { Metadata } from "next";
import TomlToYamlPage from "./toml-to-yaml-page";

export const metadata: Metadata = {
  title: "TOML to YAML - IT Tools",
  description:
    "Convert TOML (Tom's Obvious, Minimal Language) to YAML (YAML Ain't Markup Language).",
};

export default function Page() {
  return <TomlToYamlPage />;
}
