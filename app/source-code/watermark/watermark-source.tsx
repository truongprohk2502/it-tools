import UISourceCode from "../_components/ui-source-code";
import { watermarkComponentCode } from "./constant";

export default function WatermarkSource() {
  return (
    <UISourceCode
      component="Watermark"
      steps={[
        {
          title: "Step 1: Create Watermark component",
          sourceCode: watermarkComponentCode,
        },
      ]}
    />
  );
}
