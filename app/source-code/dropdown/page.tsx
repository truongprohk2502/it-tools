import type { Metadata } from "next";
import DropdownSource from "./dropdown-source";

export const metadata: Metadata = {
  title: "UI Dropdown - IT Tools",
  description: "UI Dropdown component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DropdownSource />;
}
