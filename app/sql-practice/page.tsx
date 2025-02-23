import type { Metadata } from "next";
import SqlPracticePage from "./sql-practice-page";

export const metadata: Metadata = {
  title: "SQL Practice - IT Tools",
  description: "Learn SQL - Online SQL Terminal - Practice SQL Queries.",
};

export default function Page() {
  return <SqlPracticePage />;
}
