import type { Metadata } from "next";
import CheckboxSource from "./checkbox-source";

export const metadata: Metadata = {
  title: "UI Checkbox - IT Tools",
  description: "UI Checkbox component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CheckboxSource />;
}
