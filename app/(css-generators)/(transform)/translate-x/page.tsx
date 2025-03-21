import type { Metadata } from "next";
import TranslateXPage from "./translate-x-page";

export const metadata: Metadata = {
  title: "CSS Transform TranslateX - IT Tools",
  description: "CSS Transform TranslateX generator and preview.",
};

export default function Page() {
  return <TranslateXPage />;
}
