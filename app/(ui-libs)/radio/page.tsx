import type { Metadata } from "next";
import RadioPage from "./_components/radio-page";

export const metadata: Metadata = {
  title: "UI Radio - IT Tools",
  description: "UI Radio component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <RadioPage />;
}
