import type { Metadata } from "next";
import DrawerPage from "./_components/drawer-page";

export const metadata: Metadata = {
  title: "UI Drawer - IT Tools",
  description: "UI Drawer component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DrawerPage />;
}
