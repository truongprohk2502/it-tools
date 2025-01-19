import type { Metadata } from "next";
import ImageDiffPage from "./_components/image-diff-page";

export const metadata: Metadata = {
  title: "UI ImageDiff - IT Tools",
  description: "UI ImageDiff component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ImageDiffPage />;
}
