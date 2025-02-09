"use client";

import { formatTypeScriptCode } from "@/lib/prettier";
import { jsonSchemaToZod } from "json-schema-to-zod";
import transformJsonSchema from "to-json-schema";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import {
  JSON_SOURCE,
  jsonToZodConfigs,
  ZOD_SOURCE,
  type JsonToZodConfig,
} from "./constants";

const JsonToGraphQLPage: React.FC = () => {
  const transformer = async (
    code: string,
    setting: { [key: string]: boolean } | undefined,
  ): Promise<TransformerResponse> => {
    try {
      const settings = setting as unknown as JsonToZodConfig;

      const jsonSchema = transformJsonSchema(JSON.parse(code), {
        required: true,
        strings: {
          detectFormat: false,
        },
        arrays: {
          mode: "tuple",
        },
      });

      const transformed = jsonSchemaToZod(jsonSchema, {
        name: "mySchema",
        module: "esm",
        type: settings.exportType,
        noImport: settings.noImport,
      });

      const formatted = await formatTypeScriptCode(transformed);

      return Promise.resolve({
        type: "success",
        code: formatted,
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
      to="Zod schema"
      sourceLanguage="json"
      targetLanguage="js"
      initSource={JSON_SOURCE}
      initTarget={ZOD_SOURCE}
      settings={jsonToZodConfigs}
      onTransform={transformer}
    />
  );
};

export default JsonToGraphQLPage;
