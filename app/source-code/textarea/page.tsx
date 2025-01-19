import type { Metadata } from "next";
import TextareaSource from "./textarea-source";

export const metadata: Metadata = {
  title: "UI Textarea - IT Tools",
  description: "UI Textarea component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TextareaSource />;
}
