"use client";

import { stringify } from "yaml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, YAML_SOURCE } from "./constants";

const JsonToYamlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = stringify(JSON.parse(code));
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
      to="YAML"
      sourceLanguage="json"
      targetLanguage="yaml"
      initSource={JSON_SOURCE}
      initTarget={YAML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToYamlPage;
