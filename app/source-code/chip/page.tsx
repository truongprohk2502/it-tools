import type { Metadata } from "next";
import ChipSource from "./chip-source";

export const metadata: Metadata = {
  title: "UI Chip - IT Tools",
  description: "UI Chip component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ChipSource />;
}
