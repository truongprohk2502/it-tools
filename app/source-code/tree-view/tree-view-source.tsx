import UISourceCode from "../_components/ui-source-code";
import { treeNodeComponentCode, treeViewComponentCode } from "./constant";

export default function TreeViewSource() {
  return (
    <UISourceCode
      component="TreeView"
      steps={[
        {
          title: "Step 1: Create TreeNode component",
          sourceCode: treeNodeComponentCode,
        },
        {
          title: "Step 2: Create TreeView component",
          sourceCode: treeViewComponentCode,
        },
      ]}
    />
  );
}
