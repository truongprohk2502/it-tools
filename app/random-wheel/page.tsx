import type { Metadata } from "next";
import RandomWheelPage from "./random-wheel-page";

export const metadata: Metadata = {
  title: "Random Wheel - IT Tools",
  description:
    "Free and easy to use spinner. Enter names and spin the wheel to pick a random winner. Customize look and feel, save and share wheels.",
};

export default function Page() {
  return <RandomWheelPage />;
}
