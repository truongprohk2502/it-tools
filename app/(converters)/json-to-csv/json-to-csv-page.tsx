"use client";

import { json2csv } from "json-2-csv";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { CSV_SOURCE, JSON_SOURCE } from "./constants";

const JsonToCsvPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = json2csv(JSON.parse(code), {
        arrayIndexesAsKeys: true,
      });
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
      to="CSV"
      sourceLanguage="json"
      targetLanguage="csv"
      initSource={JSON_SOURCE}
      initTarget={CSV_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToCsvPage;
