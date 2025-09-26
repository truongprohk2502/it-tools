import type { Metadata } from "next";
import AvatarGeneratorPage from "./avatar-generator-page";

export const metadata: Metadata = {
  title: "Avatar Generator - IT Tools",
  description: "Generate a unique avatar based on your preferences.",
};

export default function Page() {
  return <AvatarGeneratorPage />;
}
