import type { Metadata } from "next";
import CssToTemplatePage from "./css-to-template-page";

export const metadata: Metadata = {
  title: "CSS to Template literal - IT Tools",
  description: "Convert CSS to Template literal.",
};

export default function Page() {
  return <CssToTemplatePage />;
}
