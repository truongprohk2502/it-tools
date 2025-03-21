import type { Metadata } from "next";
import FilterSaturatePage from "./filter-saturate-page";

export const metadata: Metadata = {
  title: "CSS Filter Saturate - IT Tools",
  description: "CSS Filter Saturate generator and preview.",
};

export default function Page() {
  return <FilterSaturatePage />;
}
