import type { Metadata } from "next";
import JsonToMobxPage from "./json-to-mobx-page";

export const metadata: Metadata = {
  title: "JSON to MobX - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to MobX model.",
};

export default function Page() {
  return <JsonToMobxPage />;
}
