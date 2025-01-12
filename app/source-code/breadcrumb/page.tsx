import type { Metadata } from "next";
import BreadcrumbSource from "./breadcrumb-source";

export const metadata: Metadata = {
  title: "UI Breadcrumb - IT Tools",
  description: "UI Breadcrumb component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <BreadcrumbSource />;
}
