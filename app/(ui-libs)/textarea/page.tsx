import type { Metadata } from "next";
import TextareaPage from "./_components/textarea-page";

export const metadata: Metadata = {
  title: "UI Textarea - IT Tools",
  description: "UI Textarea component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TextareaPage />;
}
