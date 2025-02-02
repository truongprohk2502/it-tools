import type { Metadata } from "next";
import TreeViewSource from "./tree-view-source";

export const metadata: Metadata = {
  title: "UI TreeView - IT Tools",
  description: "UI TreeView component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TreeViewSource />;
}
