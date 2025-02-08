"use server";

// @ts-expect-error missing types
import graphQLConverter from "@walmartlabs/json-to-simple-graphql-schema/lib";

export async function jsonToGraphQL(code: string): Promise<{ value: string }> {
  return graphQLConverter.jsonToSchema({
    jsonInput: code,
  });
}
