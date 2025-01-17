import type { Metadata } from "next";
import ChipPage from "./_components/chip-page";

export const metadata: Metadata = {
  title: "UI Chip - IT Tools",
  description: "UI Chip component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ChipPage />;
}
