import type { Metadata } from "next";
import BackgroundColorPage from "./background-color-page";

export const metadata: Metadata = {
  title: "CSS Background Color - IT Tools",
  description: "CSS Background Color generator and preview.",
};

export default function Page() {
  return <BackgroundColorPage />;
}
