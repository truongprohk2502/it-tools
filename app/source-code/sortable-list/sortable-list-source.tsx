import UISourceCode from "../_components/ui-source-code";
import { sortableListComponentCode } from "./constant";

export default function SortableListSource() {
  return (
    <UISourceCode
      component="SortableList"
      steps={[
        {
          title: "Step 1: Create SortableList component",
          sourceCode: sortableListComponentCode,
        },
      ]}
    />
  );
}
