import type { Metadata } from "next";
import BrowserMockupSource from "./browser-mockup-source";

export const metadata: Metadata = {
  title: "UI BrowserMockup - IT Tools",
  description: "UI BrowserMockup component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <BrowserMockupSource />;
}
