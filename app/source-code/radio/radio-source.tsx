import UISourceCode from "../_components/ui-source-code";
import { radioComponentCode, radioVariantCode } from "./constant";

export default function RadioSource() {
  return (
    <UISourceCode
      component="Radio"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: radioVariantCode,
        },
        {
          title: "Step 2: Create Radio component",
          sourceCode: radioComponentCode,
        },
      ]}
    />
  );
}
