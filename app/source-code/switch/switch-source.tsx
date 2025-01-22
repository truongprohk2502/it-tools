import UISourceCode from "../_components/ui-source-code";
import { switchComponentCode, switchVariantCode } from "./constant";

export default function SwitchSource() {
  return (
    <UISourceCode
      component="Switch"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: switchVariantCode,
        },
        {
          title: "Step 2: Create Switch component",
          sourceCode: switchComponentCode,
        },
      ]}
    />
  );
}
