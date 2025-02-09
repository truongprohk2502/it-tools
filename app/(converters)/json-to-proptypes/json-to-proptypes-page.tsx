"use client";

import { jsonToPropTypes } from "@/services/babel-transformer.service";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, PROPTYPES_SOURCE } from "./constants";

const JsonToPropTypesPage: React.FC = () => {
  const transformer = async (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = await jsonToPropTypes(code);
      if (!transformed) throw Error();
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
      runOnServer
      from="JSON"
      to="React Prop Types"
      sourceLanguage="json"
      targetLanguage="js"
      initSource={JSON_SOURCE}
      initTarget={PROPTYPES_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToPropTypesPage;
