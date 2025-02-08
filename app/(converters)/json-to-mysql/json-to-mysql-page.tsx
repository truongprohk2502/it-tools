"use client";

import gs from "generate-schema";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, MYSQL_SOURCE } from "./constants";

const JsonToMySqlPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = gs.mysql(JSON.parse(code));
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
      to="MySQL"
      sourceLanguage="json"
      targetLanguage="sql"
      initSource={JSON_SOURCE}
      initTarget={MYSQL_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToMySqlPage;
