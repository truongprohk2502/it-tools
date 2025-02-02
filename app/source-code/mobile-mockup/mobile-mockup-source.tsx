import UISourceCode from "../_components/ui-source-code";
import { mobileMockupComponentCode, mobileMockupTypesCode } from "./constant";

export default function MobileMockupSource() {
  return (
    <UISourceCode
      component="MobileMockup"
      steps={[
        {
          title: "Step 1: Create TypeScript types",
          sourceCode: mobileMockupTypesCode,
        },
        {
          title: "Step 2: Create MobileMockup component",
          sourceCode: mobileMockupComponentCode,
        },
      ]}
    />
  );
}
