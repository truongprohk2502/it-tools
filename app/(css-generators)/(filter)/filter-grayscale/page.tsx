import type { Metadata } from "next";
import FilterGrayscalePage from "./filter-grayscale-page";

export const metadata: Metadata = {
  title: "CSS Filter Grayscale - IT Tools",
  description: "CSS Filter Grayscale generator and preview.",
};

export default function Page() {
  return <FilterGrayscalePage />;
}
