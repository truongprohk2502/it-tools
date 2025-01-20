import UISourceCode from "../_components/ui-source-code";
import { sliderComponentCode, sliderVariantCode } from "./constant";

export default function SliderSource() {
  return (
    <UISourceCode
      component="Slider"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: sliderVariantCode,
        },
        {
          title: "Step 2: Create Slider component",
          sourceCode: sliderComponentCode,
        },
      ]}
    />
  );
}
