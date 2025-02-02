import type { Metadata } from "next";
import WatermarkPage from "./_components/watermark-page";

export const metadata: Metadata = {
  title: "UI Watermark - IT Tools",
  description: "UI Watermark component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <WatermarkPage />;
}
