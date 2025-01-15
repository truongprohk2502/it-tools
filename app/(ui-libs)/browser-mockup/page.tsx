import type { Metadata } from "next";
import BrowserMockupPage from "./_components/browser-mockup-page";

export const metadata: Metadata = {
  title: "UI BrowserMockup - IT Tools",
  description: "UI BrowserMockup component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <BrowserMockupPage />;
}
