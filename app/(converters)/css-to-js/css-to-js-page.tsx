"use client";

import postcss from "postcss";
import postcssJs from "postcss-js";
import ConverterLayout, {
  type TransformerResponse,
} from "../_components/converter-layout";
import { CSS_SOURCE, JAVASCRIPT_SOURCE } from "./constants";

const CssToJsPage: React.FC = () => {
  const transformer = (code: string): Promise<TransformerResponse> => {
    try {
      const root = postcss.parse(code);
      const transformed = JSON.stringify(postcssJs.objectify(root), null, 2);
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
      from="CSS"
      to="JavaScript object"
      sourceLanguage="css"
      targetLanguage="js"
      initSource={CSS_SOURCE}
      initTarget={JAVASCRIPT_SOURCE}
      onTransform={transformer}
    />
  );
};

export default CssToJsPage;
