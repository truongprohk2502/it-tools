"use client";

import gs from "generate-schema";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, MONGOOSE_SOURCE } from "./constants";

const JsonToMongoosePage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = JSON.stringify(
        gs.mongoose(JSON.parse(code)),
        null,
        2,
      );
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
      to="Mongoose schema"
      sourceLanguage="json"
      targetLanguage="json"
      initSource={JSON_SOURCE}
      initTarget={MONGOOSE_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToMongoosePage;
