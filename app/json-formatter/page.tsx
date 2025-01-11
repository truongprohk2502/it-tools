import type { Metadata } from "next";
import JsonFormatterPage from "./json-formatter-page";

export const metadata: Metadata = {
  title: "JSON Formatter - IT Tools",
  description:
    "JSON Formatter / Beautifier and JSON Validator will format JSON data, and helps to validate, convert JSON to XML, JSON to CSV. Save and Share JSON",
};

export default function Page() {
  return <JsonFormatterPage />;
}
