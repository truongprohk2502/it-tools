import type { Metadata } from "next";
import TableSource from "./table-source";

export const metadata: Metadata = {
  title: "UI Table - IT Tools",
  description: "UI Table component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <TableSource />;
}
