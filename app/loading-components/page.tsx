import type { Metadata } from "next";
import LoadingComponentsPage from "./load-components-page";

export const metadata: Metadata = {
  title: "Loading Components - IT Tools",
  description: "Demonstrates various loading components with css-in-js style.",
};

export default function Page() {
  return <LoadingComponentsPage />;
}
