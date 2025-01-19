import UISourceCode from "../_components/ui-source-code";
import { textareaComponentCode, textareaVariantCode } from "./constant";

export default function TextareaSource() {
  return (
    <UISourceCode
      component="Textarea"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: textareaVariantCode,
        },
        {
          title: "Step 2: Create Textarea component",
          sourceCode: textareaComponentCode,
        },
      ]}
    />
  );
}
