import type { Metadata } from "next";
import VideoConvertersPage from "./video-converters-page";

export const metadata: Metadata = {
  title: "Video Converters - IT Tools",
  description: "The ability to convert videos from one format to another.",
};

export default function Page() {
  return <VideoConvertersPage />;
}
