import type { Metadata } from "next";
import SliderSource from "./slider-source";

export const metadata: Metadata = {
  title: "UI Slider - IT Tools",
  description: "UI Slider component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SliderSource />;
}
