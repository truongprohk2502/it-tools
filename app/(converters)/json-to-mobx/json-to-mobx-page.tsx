"use client";

import { jsonToMobx } from "@/services/babel-transformer.service";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { JSON_SOURCE, MOBX_SOURCE } from "./constants";

const JsonToMobxPage: React.FC = () => {
  const transformer = async (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = await jsonToMobx(code);
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
      to="MobX model"
      sourceLanguage="json"
      targetLanguage="js"
      initSource={JSON_SOURCE}
      initTarget={MOBX_SOURCE}
      onTransform={transformer}
    />
  );
};

export default JsonToMobxPage;
