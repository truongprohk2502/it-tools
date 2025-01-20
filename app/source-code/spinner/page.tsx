import type { Metadata } from "next";
import SpinnerSource from "./spinner-source";

export const metadata: Metadata = {
  title: "UI Spinner - IT Tools",
  description: "UI Spinner component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SpinnerSource />;
}
