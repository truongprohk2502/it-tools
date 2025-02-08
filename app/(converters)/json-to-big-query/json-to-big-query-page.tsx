"use client";

import gs from "generate-schema";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { BIGQUERY_SOURCE, JSON_SOURCE } from "./constants";

const JsonToBigQueryPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = JSON.stringify(
        gs.bigquery(JSON.parse(code)),
        null,
        2,
      );
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
      from="JSON"
      to="BigQuery schema"
      sourceLanguage="json"
      targetLanguage="json"
      initSource={JSON_SOURCE}
      initTarget={BIGQUERY_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToBigQueryPage;
