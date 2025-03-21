import type { Metadata } from "next";
import FilterInvertPage from "./filter-invert-page";

export const metadata: Metadata = {
  title: "CSS Filter Invert - IT Tools",
  description: "CSS Filter Invert generator and preview.",
};

export default function Page() {
  return <FilterInvertPage />;
}
