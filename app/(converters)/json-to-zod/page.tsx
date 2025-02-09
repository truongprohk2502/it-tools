import type { Metadata } from "next";
import JsonToZodPage from "./json-to-zod-page";

export const metadata: Metadata = {
  title: "JSON to Zod - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to Zod schema.",
};

export default function Page() {
  return <JsonToZodPage />;
}
