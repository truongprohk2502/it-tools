import type { Metadata } from "next";
import MobileMockupSource from "./mobile-mockup-source";

export const metadata: Metadata = {
  title: "UI MobileMockup - IT Tools",
  description: "UI MobileMockup component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <MobileMockupSource />;
}
