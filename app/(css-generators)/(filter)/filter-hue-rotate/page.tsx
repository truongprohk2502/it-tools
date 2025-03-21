import type { Metadata } from "next";
import FilterHueRotatePage from "./filter-hue-rotate-page";

export const metadata: Metadata = {
  title: "CSS Filter Hue-Rotate - IT Tools",
  description: "CSS Filter Hue-Rotate generator and preview.",
};

export default function Page() {
  return <FilterHueRotatePage />;
}
