import type { Metadata } from "next";
import LinearGradientPage from "./linear-gradient-page";

export const metadata: Metadata = {
  title: "CSS Linear Gradient - IT Tools",
  description: "CSS Linear Gradient generator and preview.",
};

export default function Page() {
  return <LinearGradientPage />;
}
