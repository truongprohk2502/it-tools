import type { Metadata } from "next";
import TabsPage from "./_components/tabs-page";

export const metadata: Metadata = {
  title: "UI Tabs - IT Tools",
  description: "UI Tabs component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TabsPage />;
}
