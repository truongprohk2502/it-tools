import type { Metadata } from "next";
import ImageDiffSource from "./image-diff-source";

export const metadata: Metadata = {
  title: "UI ImageDiff - IT Tools",
  description: "UI ImageDiff component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ImageDiffSource />;
}
