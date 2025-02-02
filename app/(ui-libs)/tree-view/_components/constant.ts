import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const treeViewProperties: UIField[] = [
  {
    name: "expandAll",
    description: "Initially expand all TreeView",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "showIcon",
    description: "Show icon of TreeView",
    default: "true",
    required: false,
    type: "boolean",
  },
  {
    name: "showVerticalLine",
    description: "Show vertical line of TreeView",
    default: "true",
    required: false,
    type: "boolean",
  },
  {
    name: "data",
    description: "Data of TreeView",
    default: null,
    required: true,
    type: "none",
    typeLabel: "TreeInfo[]",
  },
  {
    name: "icons",
    description: "Custom icons list of TreeView",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
