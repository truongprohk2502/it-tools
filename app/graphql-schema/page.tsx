import type { Metadata } from "next";
import GraphQLSchemaPage from "./graphql-schema-page";

export const metadata: Metadata = {
  title: "GraphQL Schema - IT Tools",
  description: "Fetch and display GraphQL schema from API.",
};

export default function Page() {
  return <GraphQLSchemaPage />;
}
