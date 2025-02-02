import UISourceCode from "../_components/ui-source-code";
import {
  circleComponentCode,
  infoComponentCode,
  lineComponentCode,
  stepsComponentCode,
} from "./constant";

export default function StepsSource() {
  return (
    <UISourceCode
      component="Steps"
      steps={[
        {
          title: "Step 1: Create Circle component",
          sourceCode: circleComponentCode,
        },
        {
          title: "Step 2: Create Info component",
          sourceCode: infoComponentCode,
        },
        {
          title: "Step 3: Create Line component",
          sourceCode: lineComponentCode,
        },
        {
          title: "Step 4: Create Steps component",
          sourceCode: stepsComponentCode,
        },
      ]}
    />
  );
}
