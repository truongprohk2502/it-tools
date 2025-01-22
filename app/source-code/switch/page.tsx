import type { Metadata } from "next";
import SwitchSource from "./switch-source";

export const metadata: Metadata = {
  title: "UI Switch - IT Tools",
  description: "UI Switch component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SwitchSource />;
}
