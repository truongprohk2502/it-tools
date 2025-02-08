"use client";

import { parse } from "@iarna/toml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, TOML_SOURCE } from "./constants";

const TomlToJsonPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = JSON.stringify(parse(code), undefined, 2);
      return Promise.resolve({ type: "success", code: transformed });
    } catch (err: unknown) {
      return Promise.resolve({
        type: "failed",
        error:
          err instanceof Error && err.name === "TomlError"
            ? "invalid"
            : "unknown",
      });
    }
  };

  return (
    <ConverterLayout
      from="TOML"
      to="JSON"
      sourceLanguage="toml"
      targetLanguage="json"
      initSource={TOML_SOURCE}
      initTarget={JSON_SOURCE}
      onTransform={transformer}
    />
  );
};

export default TomlToJsonPage;
