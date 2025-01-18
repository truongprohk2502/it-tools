import type { Metadata } from "next";
import CountdownPage from "./_components/countdown-page";

export const metadata: Metadata = {
  title: "UI Countdown - IT Tools",
  description: "UI Countdown component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CountdownPage />;
}
