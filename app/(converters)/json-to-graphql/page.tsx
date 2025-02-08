import type { Metadata } from "next";
import JsonToGraphQLPage from "./json-to-graphql-page";

export const metadata: Metadata = {
  title: "JSON to GraphQL - IT Tools",
  description: "Convert JSON (JavaScript Object Notation) to GraphQL schema.",
};

export default function Page() {
  return <JsonToGraphQLPage />;
}
