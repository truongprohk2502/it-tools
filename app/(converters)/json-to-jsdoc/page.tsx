import type { Metadata } from "next";
import JsonToJsDocPage from "./json-to-jsdoc-page";

export const metadata: Metadata = {
  title: "JSON to JsDoc - IT Tools",
  description:
    "Convert JSON (JavaScript Object Notation) to JsDoc (JavaScript Document).",
};

export default function Page() {
  return <JsonToJsDocPage />;
}
