"use client";

import toml from "@iarna/toml";
import xml2js from "xml2js";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { TOML_SOURCE, XML_SOURCE } from "./constants";

const TomlToXmlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const builder = new xml2js.Builder({
        renderOpts: {
          indent: Array(2).fill(" ").join(""),
          newline: "\n",
          pretty: true,
        },
      });

      const transformed = builder.buildObject(toml.parse(code));

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
      to="XML"
      sourceLanguage="toml"
      targetLanguage="xml"
      initSource={TOML_SOURCE}
      initTarget={XML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default TomlToXmlPage;
