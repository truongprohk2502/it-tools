import type { Metadata } from "next";
import ContextMenuSource from "./context-menu-source";

export const metadata: Metadata = {
  title: "UI ContextMenu - IT Tools",
  description: "UI ContextMenu component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ContextMenuSource />;
}
