import type { Metadata } from "next";
import BadgePage from "./_components/badge-page";

export const metadata: Metadata = {
  title: "UI Badge - IT Tools",
  description: "UI Badge component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <BadgePage />;
}
