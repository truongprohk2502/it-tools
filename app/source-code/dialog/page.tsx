import type { Metadata } from "next";
import DialogSource from "./dialog-source";

export const metadata: Metadata = {
  title: "UI Dialog - IT Tools",
  description: "UI Dialog component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DialogSource />;
}
