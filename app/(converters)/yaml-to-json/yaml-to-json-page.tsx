"use client";

import yaml from "yaml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, YAML_SOURCE } from "./constants";

const YamlToJsonPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = JSON.stringify(yaml.parse(code), undefined, 2);
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
      from="YAML"
      to="JSON"
      sourceLanguage="yaml"
      targetLanguage="json"
      initSource={YAML_SOURCE}
      initTarget={JSON_SOURCE}
      onTransform={transformer}
    />
  );
};

export default YamlToJsonPage;
