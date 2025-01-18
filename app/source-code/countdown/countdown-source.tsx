import UISourceCode from "../_components/ui-source-code";
import {
  countdownComponentCode,
  countdownHelpersCode,
  countdownItemComponentCode,
  countdownLabelComponentCode,
  countdownTypesCode,
} from "./constant";

export default function CountdownSource() {
  return (
    <UISourceCode
      component="Countdown"
      steps={[
        {
          title: "Step 1: Create TypeScript types",
          sourceCode: countdownTypesCode,
        },
        {
          title: "Step 2: Create helper functions",
          sourceCode: countdownHelpersCode,
        },
        {
          title: "Step 3: Create CountdownLabel component",
          sourceCode: countdownLabelComponentCode,
        },
        {
          title: "Step 4: Create CountdownItem component",
          sourceCode: countdownItemComponentCode,
        },
        {
          title: "Step 5: Create Countdown component",
          sourceCode: countdownComponentCode,
        },
      ]}
    />
  );
}
