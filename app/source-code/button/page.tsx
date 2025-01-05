import type { Metadata } from "next";
import ButtonSource from "./button-source";

export const metadata: Metadata = {
  title: "UI Button - IT Tools",
  description: "UI Button component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ButtonSource />;
}
