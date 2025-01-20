import type { Metadata } from "next";
import RipplePage from "./_components/ripple-page";

export const metadata: Metadata = {
  title: "UI Ripple - IT Tools",
  description: "UI Ripple component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <RipplePage />;
}
