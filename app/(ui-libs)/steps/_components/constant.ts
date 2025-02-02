import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const stepsProperties: UIField[] = [
  {
    name: "position",
    description: "Display type info of Steps",
    default: '"inline"',
    required: false,
    type: "radio",
    radioList: ["inline", "break-line"],
  },
  {
    name: "color",
    description: "Color of Steps",
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
    name: "steps",
    description: "Steps list",
    default: null,
    required: false,
    type: "none",
    typeLabel: "Step[]",
  },
  {
    name: "current",
    description: "Current active index",
    default: null,
    required: false,
    type: "number",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
