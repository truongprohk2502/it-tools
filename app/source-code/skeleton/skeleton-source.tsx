import UISourceCode from "../_components/ui-source-code";
import { skeletonComponentCode, skeletonTailwindCode } from "./constant";

export default function SkeletonSource() {
  return (
    <UISourceCode
      component="Skeleton"
      steps={[
        {
          title: "Step 1: Create Tailwind configs",
          sourceCode: skeletonTailwindCode,
        },
        {
          title: "Step 2: Create Skeleton component",
          sourceCode: skeletonComponentCode,
        },
      ]}
    />
  );
}
