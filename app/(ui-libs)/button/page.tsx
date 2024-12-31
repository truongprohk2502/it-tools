import type { Metadata } from "next";
import ButtonPage from "./_components/button-page";

export const metadata: Metadata = {
  title: "UI Button - IT Tools",
  description: "UI Button component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ButtonPage />;
}
