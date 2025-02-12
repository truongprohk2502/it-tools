import type { Metadata } from "next";
import SqlitePreviewPage from "./sqlite-preview-page";

export const metadata: Metadata = {
  title: "Sqlite Preview - IT Tools",
  description: "Sqlite file preview, execute sql query and download results.",
};

export default function Page() {
  return <SqlitePreviewPage />;
}
