import type { Metadata } from "next";
import SpinnerPage from "./_components/spinner-page";

export const metadata: Metadata = {
  title: "UI Spinner - IT Tools",
  description: "UI Spinner component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SpinnerPage />;
}
