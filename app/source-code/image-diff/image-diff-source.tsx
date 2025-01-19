import UISourceCode from "../_components/ui-source-code";
import { imageDiffComponentCode } from "./constant";

export default function ImageDiffSource() {
  return (
    <UISourceCode
      component="ImageDiff"
      steps={[
        {
          title: "Step 1: Create ImageDiff component",
          sourceCode: imageDiffComponentCode,
        },
      ]}
    />
  );
}
