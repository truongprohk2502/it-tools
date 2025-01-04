import type { Metadata } from "next";
import AngleSliderPage from "./_components/angle-slider-page";

export const metadata: Metadata = {
  title: "UI AngleSlider - IT Tools",
  description: "UI AngleSlider component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AngleSliderPage />;
}
