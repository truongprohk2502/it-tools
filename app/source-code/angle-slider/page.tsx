import type { Metadata } from "next";
import UISourceCode from "../_components/ui-source-code";
import { angleSliderComponentCode } from "./constant";

export const metadata: Metadata = {
  title: "UI AngleSlider - IT Tools",
  description: "UI AngleSlider component using ReactJS and TailwindCSS",
};

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
