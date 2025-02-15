import type { Metadata } from "next";
import JavascriptToTypeScriptPage from "./js-to-ts-type-page";

export const metadata: Metadata = {
  title: "JavaScript to TypeScript type - IT Tools",
  description: "Convert JavaScript object to TypeScript type.",
};

export default function Page() {
  return <JavascriptToTypeScriptPage />;
}
