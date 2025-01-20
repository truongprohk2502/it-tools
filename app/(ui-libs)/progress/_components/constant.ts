import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const progressProperties: UIField[] = [
  {
    name: "value",
    description: "Value of Progress in percentage",
    default: null,
    required: true,
    type: "number",
  },
  {
    name: "size",
    description: "Size of Progress",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "color",
    description: "Color of Progress",
    default: '"primary"',
    required: false,
    type: "radio",
    radioList: [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
  },
  {
    name: "hasStripes",
    description: "Whether has stripes on progress bar",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "animateStripes",
    description: "Whether has animate stripes on progress",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: true,
    type: "none",
  },
];
