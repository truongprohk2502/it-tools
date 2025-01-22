import UISourceCode from "../_components/ui-source-code";
import { tooltipComponentCode, tooltipVariantCode } from "./constant";

export default function TooltipSource() {
  return (
    <UISourceCode
      component="Tooltip"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: tooltipVariantCode,
        },
        {
          title: "Step 2: Create Tooltip component",
          sourceCode: tooltipComponentCode,
        },
      ]}
    />
  );
}
