import type { Metadata } from "next";
import SwitchPage from "./_components/switch-page";

export const metadata: Metadata = {
  title: "UI Switch - IT Tools",
  description: "UI Switch component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SwitchPage />;
}
