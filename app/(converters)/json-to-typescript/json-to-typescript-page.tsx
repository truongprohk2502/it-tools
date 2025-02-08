"use client";

import { json2ts } from "json-ts";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, TYPESCRIPT_SOURCE } from "./constants";

const JsonToTypescriptPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = json2ts(code);
      return Promise.resolve({ type: "success", code: transformed });
    } catch (err: unknown) {
      return Promise.resolve({
        type: "failed",
        error: "invalid",
      });
    }
  };

  return (
    <ConverterLayout
      from="JSON"
      to="TypeScript"
      sourceLanguage="json"
      targetLanguage="ts"
      initSource={JSON_SOURCE}
      initTarget={TYPESCRIPT_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToTypescriptPage;
