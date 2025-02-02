import type { Metadata } from "next";
import TreeViewPage from "./_components/tree-view-page";

export const metadata: Metadata = {
  title: "UI TreeView - IT Tools",
  description: "UI TreeView component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TreeViewPage />;
}
