import type { Metadata } from "next";
import DialogPage from "./_components/dialog-page";

export const metadata: Metadata = {
  title: "UI Dialog - IT Tools",
  description: "UI Dialog component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DialogPage />;
}
