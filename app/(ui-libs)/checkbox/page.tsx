import type { Metadata } from "next";
import CheckboxPage from "./_components/checkbox-page";

export const metadata: Metadata = {
  title: "UI Checkbox - IT Tools",
  description: "UI Checkbox component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CheckboxPage />;
}
