import type { Metadata } from "next";
import MobileMockupPage from "./_components/mobile-mockup-page";

export const metadata: Metadata = {
  title: "UI MobileMockup - IT Tools",
  description: "UI MobileMockup component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <MobileMockupPage />;
}
