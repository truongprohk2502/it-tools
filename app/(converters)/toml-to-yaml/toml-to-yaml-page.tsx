"use client";

import toml from "@iarna/toml";
import yaml from "yaml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { TOML_SOURCE, YAML_SOURCE } from "./constants";

const TomlToYamlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = yaml.stringify(toml.parse(code));
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
      from="TOML"
      to="YAML"
      sourceLanguage="toml"
      targetLanguage="yaml"
      initSource={TOML_SOURCE}
      initTarget={YAML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default TomlToYamlPage;
