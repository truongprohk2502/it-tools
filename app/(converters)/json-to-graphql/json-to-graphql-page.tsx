"use client";

import { jsonToGraphQL } from "@/services/json-to-graphql.service";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { GRAPHQL_SOURCE, JSON_SOURCE } from "./constants";

const JsonToGraphQLPage: React.FC = () => {
  const transformer = async (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = (await jsonToGraphQL(code)).value;
      return Promise.resolve({ type: "success", code: transformed });
    } catch {
      return Promise.resolve({
        type: "failed",
        error: "invalid",
      });
    }
  };

  return (
    <ConverterLayout
      runOnServer
      from="JSON"
      to="GraphQL"
      sourceLanguage="json"
      targetLanguage="graphql"
      initSource={JSON_SOURCE}
      initTarget={GRAPHQL_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToGraphQLPage;
