import type { Metadata } from "next";
import AudioCutterPage from "./audio-cutter-page";

export const metadata: Metadata = {
  title: "Audio Cutter - IT Tools",
  description: "Cut audio file to specific duration and download it.",
};

export default function Page() {
  return <AudioCutterPage />;
}
