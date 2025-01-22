import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const tooltipProperties: UIField[] = [
  {
    name: "title",
    description: "Title of Tooltip",
    default: null,
    required: true,
    type: "string",
  },
  {
    name: "position",
    description: "Position of Tooltip",
    default: '"top"',
    required: false,
    type: "radio",
    radioList: ["top", "right", "bottom", "left"],
  },
  {
    name: "width",
    description: "Width of Tooltip",
    default: '"auto"',
    required: false,
    type: "none",
    typeLabel: "string | number",
  },
  {
    name: "children",
    description: "Body content of Tooltip",
    default: null,
    required: true,
    type: "none",
    typeLabel: "ReactNode",
  },
  {
    name: "className",
    description: "Wrapper class of Tooltip",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "tooltipClassName",
    description: "Class of Tooltip",
    default: null,
    required: false,
    type: "none",
  },
];
