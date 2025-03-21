import type { Metadata } from "next";
import FilterSepiaPage from "./filter-sepia-page";

export const metadata: Metadata = {
  title: "CSS Filter Sepia - IT Tools",
  description: "CSS Filter Sepia generator and preview.",
};

export default function Page() {
  return <FilterSepiaPage />;
}
