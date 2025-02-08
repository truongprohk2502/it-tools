"use client";

import xml2js from "xml2js";
import yaml from "yaml";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { XML_SOURCE, YAML_SOURCE } from "./constants";

const YamlToXmlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const builder = new xml2js.Builder({
        renderOpts: {
          indent: Array(2).fill(" ").join(""),
          newline: "\n",
          pretty: true,
        },
      });

      const transformed = builder.buildObject(yaml.parse(code));

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
      to="XML"
      sourceLanguage="yaml"
      targetLanguage="xml"
      initSource={YAML_SOURCE}
      initTarget={XML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default YamlToXmlPage;
