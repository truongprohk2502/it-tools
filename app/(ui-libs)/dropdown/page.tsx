import type { Metadata } from "next";
import DropdownPage from "./_components/dropdown-page";

export const metadata: Metadata = {
  title: "UI Dropdown - IT Tools",
  description: "UI Dropdown component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DropdownPage />;
}
