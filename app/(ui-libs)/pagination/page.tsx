import type { Metadata } from "next";
import PaginationPage from "./_components/pagination-page";

export const metadata: Metadata = {
  title: "UI Pagination - IT Tools",
  description: "UI Pagination component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <PaginationPage />;
}
