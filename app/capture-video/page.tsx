import type { Metadata } from "next";
import CaptureVideoPage from "./capture-video-page";

export const metadata: Metadata = {
  title: "Capture Video - IT Tools",
  description:
    "Ability to capture an image from video! Download it if you want.",
};

export default function Page() {
  return <CaptureVideoPage />;
}
