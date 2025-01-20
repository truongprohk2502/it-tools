import UISourceCode from "../_components/ui-source-code";
import { rippleComponentCode, rippleCssCode } from "./constant";

export default function RippleSource() {
  return (
    <UISourceCode
      component="Ripple"
      steps={[
        {
          title: "Step 1: Create css styles",
          sourceCode: rippleCssCode,
        },
        {
          title: "Step 2: Create Ripple component",
          sourceCode: rippleComponentCode,
        },
      ]}
    />
  );
}
