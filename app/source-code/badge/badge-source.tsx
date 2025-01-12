import UISourceCode from "../_components/ui-source-code";
import { badgeComponentCode, badgeVariantCode } from "./constant";

export default function BadgeSource() {
  return (
    <UISourceCode
      component="Badge"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: badgeVariantCode,
        },
        {
          title: "Step 2: Create Badge component",
          sourceCode: badgeComponentCode,
        },
      ]}
    />
  );
}
