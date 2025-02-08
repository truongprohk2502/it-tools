"use client";

import xml2js from "xml2js";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, XML_SOURCE } from "./constants";

const JsonToXmlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const builder = new xml2js.Builder({
        renderOpts: {
          indent: Array(2).fill(" ").join(""),
          newline: "\n",
          pretty: true,
        },
      });

      const transformed = builder.buildObject(JSON.parse(code));

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
      to="XML"
      sourceLanguage="json"
      targetLanguage="xml"
      initSource={JSON_SOURCE}
      initTarget={XML_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToXmlPage;
