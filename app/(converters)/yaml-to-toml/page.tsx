import type { Metadata } from "next";
import YamlToTomlPage from "./yaml-to-toml-page";

export const metadata: Metadata = {
  title: "YAML to TOML - IT Tools",
  description:
    "Convert YAML (YAML Ain't Markup Language) to TOML (Tom's Obvious, Minimal Language).",
};

export default function Page() {
  return <YamlToTomlPage />;
}
