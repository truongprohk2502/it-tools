import UISourceCode from "../_components/ui-source-code";
import { inputComponentCode, inputVariantCode } from "./constant";

export default function InputSource() {
  return (
    <UISourceCode
      component="Input"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: inputVariantCode,
        },
        {
          title: "Step 2: Create Input component",
          sourceCode: inputComponentCode,
        },
      ]}
    />
  );
}
