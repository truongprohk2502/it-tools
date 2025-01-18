import type { Metadata } from "next";
import CountdownSource from "./countdown-source";

export const metadata: Metadata = {
  title: "UI Countdown - IT Tools",
  description: "UI Countdown component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CountdownSource />;
}
