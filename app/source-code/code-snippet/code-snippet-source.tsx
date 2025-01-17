import UISourceCode from "../_components/ui-source-code";
import { codeSnippetComponentCode, codeSnippetVariantCode } from "./constant";

export default function CodeSnippetSource() {
  return (
    <UISourceCode
      component="CodeSnippet"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: codeSnippetVariantCode,
        },
        {
          title: "Step 2: Create CodeSnippet component",
          sourceCode: codeSnippetComponentCode,
        },
      ]}
    />
  );
}
