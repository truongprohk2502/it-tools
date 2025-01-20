import type { Metadata } from "next";
import ProgressSource from "./progress-source";

export const metadata: Metadata = {
  title: "UI Progress - IT Tools",
  description: "UI Progress component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ProgressSource />;
}
