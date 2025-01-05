import type { Metadata } from "next";
import AngleSliderSource from "./angle-slider-source";

export const metadata: Metadata = {
  title: "UI AngleSlider - IT Tools",
  description: "UI AngleSlider component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AngleSliderSource />;
}
