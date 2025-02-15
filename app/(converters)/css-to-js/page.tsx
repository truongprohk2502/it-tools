import type { Metadata } from "next";
import CssToJsPage from "./css-to-js-page";

export const metadata: Metadata = {
  title: "CSS to JavaScript - IT Tools",
  description: "Convert CSS to JavaScript object.",
};

export default function Page() {
  return <CssToJsPage />;
}
