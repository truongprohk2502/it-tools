import UISourceCode from "../_components/ui-source-code";
import { checkboxComponentCode, checkboxVariantCode } from "./constant";

export default function CheckboxSource() {
  return (
    <UISourceCode
      component="Checkbox"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: checkboxVariantCode,
        },
        {
          title: "Step 2: Create Checkbox component",
          sourceCode: checkboxComponentCode,
        },
      ]}
    />
  );
}
