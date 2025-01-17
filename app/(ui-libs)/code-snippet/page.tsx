import type { Metadata } from "next";
import CodeSnippetPage from "./_components/code-snippet-page";

export const metadata: Metadata = {
  title: "UI CodeSnippet - IT Tools",
  description: "UI CodeSnippet component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CodeSnippetPage />;
}
