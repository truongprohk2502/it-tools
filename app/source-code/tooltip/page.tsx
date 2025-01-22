import type { Metadata } from "next";
import TooltipSource from "./tooltip-source";

export const metadata: Metadata = {
  title: "UI Tooltip - IT Tools",
  description: "UI Tooltip component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TooltipSource />;
}
