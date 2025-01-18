import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const countdownProperties: UIField[] = [
  {
    name: "seconds",
    description: "Initial seconds of Countdown",
    default: null,
    required: true,
    type: "number",
  },
  {
    name: "hasDay",
    description: "Show day in Countdown",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "variant",
    description: "Variant style of Countdown",
    default: "line_label",
    required: false,
    type: "radio",
    radioList: [
      "line_label",
      "bottom_label",
      "bottom_fill_label",
      "colon_label",
      "abbreviated_label",
    ],
  },
  {
    name: "size",
    description: "Size of Countdown",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
