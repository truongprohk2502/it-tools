import type { Metadata } from "next";
import TabsSource from "./tabs-source";

export const metadata: Metadata = {
  title: "UI Tabs - IT Tools",
  description: "UI Tabs component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TabsSource />;
}
