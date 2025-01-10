import type { Metadata } from "next";
import GenerateTextPage from "./generate-text-page";

export const metadata: Metadata = {
  title: "Generate Text - IT Tools",
  description:
    "Generate random text using various text generators and supporting various languages.",
};

export default function Page() {
  return <GenerateTextPage />;
}
