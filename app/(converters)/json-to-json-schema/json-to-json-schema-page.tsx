"use client";

import transform from "to-json-schema";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import {
  JSON_SCHEMA_SOURCE,
  JSON_SOURCE,
  jsonToJsonSchemaConfigs,
  type JsonToJsonSchemaConfig,
} from "./constants";

const JsonToJsonSchemaPage: React.FC = () => {
  const transformer = async (
    code: string,
    setting: { [key: string]: boolean } | undefined,
  ): Promise<TransformerResponse> => {
    try {
      const settings = setting as unknown as JsonToJsonSchemaConfig;

      const transformed = transform(JSON.parse(code), {
        required: settings.requireEach,
        strings: {
          detectFormat: settings.detectFormat,
        },
        arrays: {
          mode: settings.arrayMode ? "tuple" : "all",
        },
        objects: {
          postProcessFnc: (schema, obj, defaultFnc) =>
            settings.requireAll
              ? {
                  ...defaultFnc(schema, obj),
                  required: Object.getOwnPropertyNames(obj),
                }
              : schema,
        },
      });

      return Promise.resolve({
        type: "success",
        code: JSON.stringify(transformed, null, 2),
      });
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
      to="JSON Schema"
      sourceLanguage="json"
      targetLanguage="json"
      initSource={JSON_SOURCE}
      initTarget={JSON_SCHEMA_SOURCE}
      settings={jsonToJsonSchemaConfigs}
      onTransform={transformer}
    />
  );
};

export default JsonToJsonSchemaPage;
