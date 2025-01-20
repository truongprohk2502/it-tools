import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const paginationProperties: UIField[] = [
  {
    name: "total",
    description: "Total pages count",
    default: null,
    required: true,
    type: "number",
  },
  {
    name: "current",
    description: "Current page index",
    default: null,
    required: true,
    type: "number",
  },
  {
    name: "siblings",
    description: "The number of siblings page is visible beside current page",
    default: "1",
    required: false,
    type: "number",
  },
  {
    name: "showControls",
    description: "Show prev and next buttons",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "variant",
    description: "Theme variant of Pagination",
    default: '"solid"',
    required: false,
    type: "radio",
    radioList: ["solid", "separated", "outline"],
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "cellClassName",
    description: "Cell class",
    default: null,
    required: false,
    type: "none",
  },
];
