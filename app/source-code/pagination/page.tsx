import type { Metadata } from "next";
import PaginationSource from "./pagination-source";

export const metadata: Metadata = {
  title: "UI Pagination - IT Tools",
  description: "UI Pagination component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <PaginationSource />;
}
