"use client";

// @ts-expect-error missing types
import transform from "transform-json-types-fixed";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { IOTS_SOURCE, JSON_SOURCE } from "./constants";

const JsonToIOTSPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const iots = transform(code, {
        lang: "io-ts",
      });
      const transformed = `import * as t from "io-ts";\n\n${iots}`.trim();
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
      to="IO-TS"
      sourceLanguage="json"
      targetLanguage="js"
      initSource={JSON_SOURCE}
      initTarget={IOTS_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToIOTSPage;
