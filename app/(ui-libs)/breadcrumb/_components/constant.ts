import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const breadcrumbProperties: UIField[] = [
  {
    name: "separator",
    description: "Separator character",
    default: '"arrow"',
    required: false,
    type: "radio",
    radioList: ["arrow", "slash"],
  },
  {
    name: "itemsBeforeCollapse",
    description: "Number of items before collapse",
    default: "1",
    required: false,
    type: "number",
  },
  {
    name: "itemsAfterCollapse",
    description: "Number of items after collapse",
    default: "2",
    required: false,
    type: "number",
  },
  {
    name: "hasCollapse",
    description: "Breadcrumb is collapsible or not",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "disabled",
    description: "Disabled Breadcrumb",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "items",
    description: "List of items",
    default: null,
    required: true,
    type: "none",
    typeLabel: "Array<{ label: string, value: string }>",
  },
  {
    name: "onClick",
    description: "Click Breadcrumb handler",
    default: null,
    required: false,
    type: "none",
  },
];
