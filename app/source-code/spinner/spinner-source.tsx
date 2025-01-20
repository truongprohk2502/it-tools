import UISourceCode from "../_components/ui-source-code";
import {
  spinnerBounceCode,
  spinnerClipCode,
  spinnerComponentCode,
  spinnerFadeCode,
  spinnerPulseCode,
  spinnerScaleCode,
  spinnerTailwindCode,
} from "./constant";

export default function SpinnerSource() {
  return (
    <UISourceCode
      component="Spinner"
      steps={[
        {
          title: "Step 1: Create Tailwind config",
          sourceCode: spinnerTailwindCode,
        },
        {
          title: "Step 2: Create Bounce component",
          sourceCode: spinnerBounceCode,
        },
        {
          title: "Step 3: Create Clip component",
          sourceCode: spinnerClipCode,
        },
        {
          title: "Step 4: Create Fade component",
          sourceCode: spinnerFadeCode,
        },
        {
          title: "Step 5: Create Pulse component",
          sourceCode: spinnerPulseCode,
        },
        {
          title: "Step 6: Create Scale component",
          sourceCode: spinnerScaleCode,
        },
        {
          title: "Step 7: Create Spinner component",
          sourceCode: spinnerComponentCode,
        },
      ]}
    />
  );
}
