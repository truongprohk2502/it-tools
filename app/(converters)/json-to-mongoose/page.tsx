import type { Metadata } from "next";
import JsonToMongoosePage from "./json-to-mongoose-page";

export const metadata: Metadata = {
  title: "JSON to Mongoose - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to Mongoose schema.",
};

export default function Page() {
  return <JsonToMongoosePage />;
}
