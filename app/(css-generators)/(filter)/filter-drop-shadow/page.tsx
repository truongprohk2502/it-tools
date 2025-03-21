import type { Metadata } from "next";
import FilterDropShadowPage from "./filter-drop-shadow-page";

export const metadata: Metadata = {
  title: "CSS Filter Drop-Shadow - IT Tools",
  description: "CSS Filter Drop-Shadow generator and preview.",
};

export default function Page() {
  return <FilterDropShadowPage />;
}
