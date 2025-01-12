import type { Metadata } from "next";
import BadgeSource from "./badge-source";

export const metadata: Metadata = {
  title: "UI Badge - IT Tools",
  description: "UI Badge component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <BadgeSource />;
}
