import type { Metadata } from "next";
import ProgressPage from "./_components/progress-page";

export const metadata: Metadata = {
  title: "UI Progress - IT Tools",
  description: "UI Progress component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ProgressPage />;
}
