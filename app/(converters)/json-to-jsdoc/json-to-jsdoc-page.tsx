"use client";

import transform from "simple-json-to-jsdoc";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSDOC_SOURCE, JSON_SOURCE } from "./constants";

const JsonToJsDocPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = transform(code);
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
      to="JsDoc"
      sourceLanguage="json"
      targetLanguage="js"
      initSource={JSON_SOURCE}
      initTarget={JSDOC_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToJsDocPage;
