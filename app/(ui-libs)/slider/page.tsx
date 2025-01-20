import type { Metadata } from "next";
import SliderPage from "./_components/slider-page";

export const metadata: Metadata = {
  title: "UI Slider - IT Tools",
  description: "UI Slider component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SliderPage />;
}
