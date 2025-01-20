import type { Metadata } from "next";
import SwapButtonSource from "./swap-button-source";

export const metadata: Metadata = {
  title: "UI SwapButton - IT Tools",
  description: "UI SwapButton component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SwapButtonSource />;
}
