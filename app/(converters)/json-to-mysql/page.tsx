import type { Metadata } from "next";
import JsonToMySqlPage from "./json-to-mysql-page";

export const metadata: Metadata = {
  title: "JSON to MySQL - IT Tools",
  description:
    "Convert JSON (JavaScript Object Notation) to MySQL generate table query.",
};

export default function Page() {
  return <JsonToMySqlPage />;
}
