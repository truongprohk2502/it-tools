import type { Metadata } from "next";
import StepsPage from "./_components/steps-page";

export const metadata: Metadata = {
  title: "UI Steps - IT Tools",
  description: "UI Steps component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <StepsPage />;
}
