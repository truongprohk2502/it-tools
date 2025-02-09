import type { Metadata } from "next";
import JsonToPropTypesPage from "./json-to-proptypes-page";

export const metadata: Metadata = {
  title: "JSON to React Prop Types - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to React prop types.",
};

export default function Page() {
  return <JsonToPropTypesPage />;
}
