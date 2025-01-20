import type { Metadata } from "next";
import RadioSource from "./radio-source";

export const metadata: Metadata = {
  title: "UI Radio - IT Tools",
  description: "UI Radio component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <RadioSource />;
}
