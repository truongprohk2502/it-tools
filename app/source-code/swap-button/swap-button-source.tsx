import UISourceCode from "../_components/ui-source-code";
import { swapComponentCode } from "./constant";

export default function SwapButtonSource() {
  return (
    <UISourceCode
      component="SwapButton"
      steps={[
        {
          title: "Step 7: Create SwapButton component",
          sourceCode: swapComponentCode,
        },
      ]}
    />
  );
}
