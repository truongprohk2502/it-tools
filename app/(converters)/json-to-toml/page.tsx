import type { Metadata } from "next";
import JsonToTomlPage from "./json-to-toml-page";

export const metadata: Metadata = {
  title: "JSON to TOML - IT Tools",
  description:
    "Convert JSON (JavaScript Object Notation) to TOML (Tom's Obvious, Minimal Language).",
};

export default function Page() {
  return <JsonToTomlPage />;
}
