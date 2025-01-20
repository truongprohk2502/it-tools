import UISourceCode from "../_components/ui-source-code";
import {
  progressComponentCode,
  progressTailwindCode,
  progressVariantCode,
} from "./constant";

export default function ProgressSource() {
  return (
    <UISourceCode
      component="Progress"
      steps={[
        {
          title: "Step 1: Create Tailwind config",
          sourceCode: progressTailwindCode,
        },
        {
          title: "Step 2: Create variant styles",
          sourceCode: progressVariantCode,
        },
        {
          title: "Step 3: Create Progress component",
          sourceCode: progressComponentCode,
        },
      ]}
    />
  );
}
