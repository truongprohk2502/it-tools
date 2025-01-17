import UISourceCode from "../_components/ui-source-code";
import {
  contextMenuComponentCode,
  contextMenuTypesCode,
  contextMenuUseClickAwayCode,
} from "./constant";

export default function ContextMenuSource() {
  return (
    <UISourceCode
      component="ContextMenu"
      steps={[
        {
          title: "Step 1: Create TypeScript types",
          sourceCode: contextMenuTypesCode,
        },
        {
          title: "Step 2: Create useClickAway hook",
          sourceCode: contextMenuUseClickAwayCode,
        },
        {
          title: "Step 3: Create ContextMenu component",
          sourceCode: contextMenuComponentCode,
        },
      ]}
    />
  );
}
