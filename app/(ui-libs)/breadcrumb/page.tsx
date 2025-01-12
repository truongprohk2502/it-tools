import type { Metadata } from "next";
import BreadcrumbPage from "./_components/breadcrumb-page";

export const metadata: Metadata = {
  title: "UI Breadcrumb - IT Tools",
  description: "UI Breadcrumb component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <BreadcrumbPage />;
}
