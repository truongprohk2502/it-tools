import UISourceCode from "../_components/ui-source-code";
import { dialogComponentCode, dialogTailwindCode } from "./constant";

export default function DialogSource() {
  return (
    <UISourceCode
      component="Dialog"
      dependencies={["react-portal"]}
      steps={[
        {
          title: "Step 1: Create Tailwind animation",
          sourceCode: dialogTailwindCode,
        },
        {
          title: "Step 2: Create Dialog component",
          sourceCode: dialogComponentCode,
        },
      ]}
    />
  );
}
