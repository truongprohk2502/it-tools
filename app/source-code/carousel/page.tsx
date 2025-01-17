import type { Metadata } from "next";
import CarouselSource from "./carousel-source";

export const metadata: Metadata = {
  title: "UI Carousel - IT Tools",
  description: "UI Carousel component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CarouselSource />;
}
