import type { Metadata } from "next";
import ContextMenuPage from "./_components/context-menu-page";

export const metadata: Metadata = {
  title: "UI ContextMenu - IT Tools",
  description: "UI ContextMenu component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ContextMenuPage />;
}
