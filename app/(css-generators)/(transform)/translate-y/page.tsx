import type { Metadata } from "next";
import TranslateYPage from "./translate-y-page";

export const metadata: Metadata = {
  title: "CSS Transform TranslateY - IT Tools",
  description: "CSS Transform TranslateY generator and preview.",
};

export default function Page() {
  return <TranslateYPage />;
}
