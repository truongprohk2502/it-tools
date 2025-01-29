import UISourceCode from "../_components/ui-source-code";
import {
  checkboxComponentCode,
  scrollAreaComponentCode,
  tableComponentCode,
  tableHelpersCode,
  tableTypesCode,
} from "./constant";

export default function TableSource() {
  return (
    <UISourceCode
      component="Table"
      steps={[
        {
          title: "Step 1: Create ScrollArea component",
          sourceCode: scrollAreaComponentCode,
        },
        {
          title: "Step 2: Create Checkbox component",
          sourceCode: checkboxComponentCode,
        },
        {
          title: "Step 3: Create helper functions",
          sourceCode: tableHelpersCode,
        },
        {
          title: "Step 4: Create TypeScript types",
          sourceCode: tableTypesCode,
        },
        {
          title: "Step 5: Create Table component",
          sourceCode: tableComponentCode,
        },
      ]}
    />
  );
}
