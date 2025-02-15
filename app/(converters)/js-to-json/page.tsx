import type { Metadata } from "next";
import JavascriptToJsonPage from "./javascript-to-json-page";

export const metadata: Metadata = {
  title: "JavaScript to JSON - IT Tools",
  description:
    "Convert JavaScript object to JSON (JavaScript Object Notation).",
};

export default function Page() {
  return <JavascriptToJsonPage />;
}
