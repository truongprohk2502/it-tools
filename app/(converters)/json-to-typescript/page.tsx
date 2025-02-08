import type { Metadata } from "next";
import JsonToTypescriptPage from "./json-to-typescript-page";

export const metadata: Metadata = {
  title: "JSON to TypeScript - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to TypeScript type.",
};

export default function Page() {
  return <JsonToTypescriptPage />;
}
