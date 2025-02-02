import type { Metadata } from "next";
import StepsSource from "./steps-source";

export const metadata: Metadata = {
  title: "UI Steps - IT Tools",
  description: "UI Steps component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <StepsSource />;
}
