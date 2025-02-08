import type { Metadata } from "next";
import VoiceRecorderPage from "./voice-recorder-page";

export const metadata: Metadata = {
  title: "Voice Recorder - IT Tools",
  description:
    "The ability to record audio file from microphone and download it.",
};

export default function Page() {
  return <VoiceRecorderPage />;
}
