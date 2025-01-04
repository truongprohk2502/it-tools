"use client";

import UISourceCode from "../_components/ui-source-code";
import { angleSliderComponentCode } from "./constant";

export default function AngleSliderSourcePage() {
  return (
    <UISourceCode
      component="AngleSlider"
      steps={[
        {
          title: "Step 1: Create AngleSlider component",
          sourceCode: angleSliderComponentCode,
        },
      ]}
    />
  );
}
