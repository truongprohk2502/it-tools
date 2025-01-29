import type { Metadata } from "next";
import TablePage from "./_components/table-page";

export const metadata: Metadata = {
  title: "UI Table - IT Tools",
  description: "UI Table component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TablePage />;
}
