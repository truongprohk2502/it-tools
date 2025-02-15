"use client";

import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JAVASCRIPT_SOURCE, JSON_SOURCE } from "./constants";

const JavascriptToJsonPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = JSON.stringify(eval(`(${code})`), null, 2);
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
      from="JavaScript"
      to="JSON"
      sourceLanguage="javascript"
      targetLanguage="json"
      initSource={JAVASCRIPT_SOURCE}
      initTarget={JSON_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JavascriptToJsonPage;
