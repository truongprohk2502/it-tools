import type { Metadata } from "next";
import RippleSource from "./ripple-source";

export const metadata: Metadata = {
  title: "UI Ripple - IT Tools",
  description: "UI Ripple component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <RippleSource />;
}
