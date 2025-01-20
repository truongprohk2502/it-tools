import type { Metadata } from "next";
import SwapButtonPage from "./_components/swap-button-page";

export const metadata: Metadata = {
  title: "UI SwapButton - IT Tools",
  description: "UI SwapButton component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SwapButtonPage />;
}
