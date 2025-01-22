import type { Metadata } from "next";
import TooltipPage from "./_components/tooltip-page";

export const metadata: Metadata = {
  title: "UI Tooltip - IT Tools",
  description: "UI Tooltip component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TooltipPage />;
}
