import type { Metadata } from "next";
import DrawerSource from "./drawer-source";

export const metadata: Metadata = {
  title: "UI Drawer - IT Tools",
  description: "UI Drawer component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DrawerSource />;
}
