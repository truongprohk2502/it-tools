"use client";

import { stringify } from "@iarna/toml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, TOML_SOURCE } from "./constants";

const JsonToTomlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = stringify(JSON.parse(code));
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
      from="JSON"
      to="TOML"
      sourceLanguage="json"
      targetLanguage="toml"
      initSource={JSON_SOURCE}
      initTarget={TOML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToTomlPage;
