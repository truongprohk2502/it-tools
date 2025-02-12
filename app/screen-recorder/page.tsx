import type { Metadata } from "next";
import ScreenRecorderPage from "./screen-recorder-page";

export const metadata: Metadata = {
  title: "Screen Recorder - IT Tools",
  description: "The ability to record screen with microphone and download it.",
};

export default function Page() {
  return <ScreenRecorderPage />;
}
