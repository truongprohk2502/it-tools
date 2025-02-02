import type { Metadata } from "next";
import SortableListPage from "./_components/sortable-list-page";

export const metadata: Metadata = {
  title: "UI SortableList - IT Tools",
  description: "UI SortableList component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SortableListPage />;
}
