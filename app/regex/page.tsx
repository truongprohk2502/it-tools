import type { Metadata } from "next";
import RegexPage from "./regex-page";

export const metadata: Metadata = {
  title: "Regex - IT Tools",
  description: "Learn, build and test Regular Expressions.",
};

export default function Page() {
  return <RegexPage />;
}
