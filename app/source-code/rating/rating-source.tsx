import UISourceCode from "../_components/ui-source-code";
import { ratingComponentCode, ratingVariantCode } from "./constant";

export default function RatingSource() {
  return (
    <UISourceCode
      component="Rating"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: ratingVariantCode,
        },
        {
          title: "Step 2: Create Rating component",
          sourceCode: ratingComponentCode,
        },
      ]}
    />
  );
}
