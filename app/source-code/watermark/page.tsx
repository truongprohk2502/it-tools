import type { Metadata } from "next";
import WatermarkSource from "./watermark-source";

export const metadata: Metadata = {
  title: "UI Watermark - IT Tools",
  description: "UI Watermark component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <WatermarkSource />;
}
