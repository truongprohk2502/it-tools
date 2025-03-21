import type { Metadata } from "next";
import RadialGradientPage from "./radial-gradient-page";

export const metadata: Metadata = {
  title: "CSS Radial Gradient - IT Tools",
  description: "CSS Radial Gradient generator and preview.",
};

export default function Page() {
  return <RadialGradientPage />;
}
