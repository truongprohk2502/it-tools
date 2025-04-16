import type { Metadata } from "next";
import RichTextEditorPage from "./rich-text-editor-page";

export const metadata: Metadata = {
  title: "Rich Text Editor - IT Tools",
  description: "Create, edit, preview and download rich text.",
};

export default function Page() {
  return <RichTextEditorPage />;
}
