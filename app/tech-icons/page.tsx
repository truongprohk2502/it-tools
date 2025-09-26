import type { Metadata } from "next";
import TechIconsPage from "./tech-icons-page";

export const metadata: Metadata = {
  title: "Tech Icons - IT Tools",
  description:
    "Browse a collection of popular technology icons including programming languages, frameworks, libraries, and tools.",
};

export default function Page() {
  return <TechIconsPage />;
}
