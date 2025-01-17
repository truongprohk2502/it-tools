import UISourceCode from "../_components/ui-source-code";
import { chipComponentCode, chipVariantCode } from "./constant";

export default function ChipSource() {
  return (
    <UISourceCode
      component="Chip"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: chipVariantCode,
        },
        {
          title: "Step 2: Create Chip component",
          sourceCode: chipComponentCode,
        },
      ]}
    />
  );
}
