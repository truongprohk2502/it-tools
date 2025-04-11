import type { Metadata } from "next";
import MarkdownPreviewPage from "./markdown-preview-page";

export const metadata: Metadata = {
  title: "Markdown Preview - IT Tools",
  description: "Edit and preview markdown in real-time.",
};

export default function Page() {
  return <MarkdownPreviewPage />;
}
