"use client";

import { cssToTemplate } from "@/services/babel-transformer.service";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { CSS_SOURCE, TEMPLATE_SOURCE } from "./constants";

const CssToTemplatePage: React.FC = () => {
  const transformer = async (code: string): Promise<TransformerResponse> => {
    try {
      const transformed = await cssToTemplate(code);
      return Promise.resolve({ type: "success", code: transformed || "" });
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
      from="CSS in JS"
      to="Template literal"
      sourceLanguage="javascript"
      targetLanguage="js"
      initSource={CSS_SOURCE}
      initTarget={TEMPLATE_SOURCE}
      onTransform={transformer}
    />
  );
};

export default CssToTemplatePage;
