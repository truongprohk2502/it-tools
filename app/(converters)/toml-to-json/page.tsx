import type { Metadata } from "next";
import TomlToJsonPage from "./toml-to-json-page";

export const metadata: Metadata = {
  title: "TOML to JSON - IT Tools",
  description:
    "Convert TOML (Tom's Obvious, Minimal Language) to JSON (JavaScript Object Notation).",
};

export default function Page() {
  return <TomlToJsonPage />;
}
