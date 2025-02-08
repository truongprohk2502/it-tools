"use client";

import toml from "@iarna/toml";
import yaml from "yaml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { TOML_SOURCE, YAML_SOURCE } from "./constants";

const YamlToTomlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = toml.stringify(yaml.parse(code));
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
      to="TOML"
      sourceLanguage="yaml"
      targetLanguage="toml"
      initSource={YAML_SOURCE}
      initTarget={TOML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default YamlToTomlPage;
