"use client";

import { json2ts } from "json-ts";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JAVASCRIPT_SOURCE, TYPESCRIPT_SOURCE } from "./constants";

const JavascriptToTypeScriptPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = json2ts(JSON.stringify(eval(`(${code})`), null, 2), {
        prefix: "",
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
      from="JavaScript"
      to="TypeScript type"
      sourceLanguage="javascript"
      targetLanguage="ts"
      initSource={JAVASCRIPT_SOURCE}
      initTarget={TYPESCRIPT_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JavascriptToTypeScriptPage;
