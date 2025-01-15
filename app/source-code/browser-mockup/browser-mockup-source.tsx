import UISourceCode from "../_components/ui-source-code";
import { browserMockupComponentCode } from "./constant";

export default function BrowserMockupSource() {
  return (
    <UISourceCode
      component="BrowserMockup"
      steps={[
        {
          title: "Step 1: Create BrowserMockup component",
          sourceCode: browserMockupComponentCode,
        },
      ]}
    />
  );
}
