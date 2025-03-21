import type { Metadata } from "next";
import FilterBrightnessPage from "./filter-brightness-page";

export const metadata: Metadata = {
  title: "CSS Filter Brightness - IT Tools",
  description: "CSS Filter Brightness generator and preview.",
};

export default function Page() {
  return <FilterBrightnessPage />;
}
