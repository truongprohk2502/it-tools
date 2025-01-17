import type { Metadata } from "next";
import CodeSnippetSource from "./code-snippet-source";

export const metadata: Metadata = {
  title: "UI CodeSnippet - IT Tools",
  description: "UI CodeSnippet component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <CodeSnippetSource />;
}
