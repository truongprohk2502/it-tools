import type { Metadata } from "next";
import SortableListSource from "./sortable-list-source";

export const metadata: Metadata = {
  title: "UI SortableList - IT Tools",
  description: "UI SortableList component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SortableListSource />;
}
