import type { Metadata } from "next";
import FilterContrastPage from "./filter-contrast-page";

export const metadata: Metadata = {
  title: "CSS Filter Contrast - IT Tools",
  description: "CSS Filter Contrast generator and preview.",
};

export default function Page() {
  return <FilterContrastPage />;
}
