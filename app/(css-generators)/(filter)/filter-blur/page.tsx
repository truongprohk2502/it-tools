import type { Metadata } from "next";
import FilterBlurPage from "./filter-blur-page";

export const metadata: Metadata = {
  title: "CSS Filter Blur - IT Tools",
  description: "CSS Filter Blur generator and preview.",
};

export default function Page() {
  return <FilterBlurPage />;
}
