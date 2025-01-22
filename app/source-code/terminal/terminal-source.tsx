import UISourceCode from "../_components/ui-source-code";
import { terminalComponentCode, terminalTypesCode } from "./constant";

export default function TerminalSource() {
  return (
    <UISourceCode
      component="Terminal"
      steps={[
        {
          title: "Step 1: Create TypeScript types",
          sourceCode: terminalTypesCode,
        },
        {
          title: "Step 2: Create Terminal component",
          sourceCode: terminalComponentCode,
        },
      ]}
    />
  );
}
