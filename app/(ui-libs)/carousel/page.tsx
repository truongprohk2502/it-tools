import type { Metadata } from "next";
import CarouselPage from "./_components/carousel-page";

export const metadata: Metadata = {
  title: "UI Carousel - IT Tools",
  description: "UI Carousel component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CarouselPage />;
}
