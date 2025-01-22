import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const switchProperties: UIField[] = [
  {
    name: "color",
    description: "Color of Swtich",
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
    name: "size",
    description: "Size of Switch",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "disabled",
    description: "Disabled status of Switch",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "checked",
    description: "Checked status of Switch",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "className",
    description: "Wrapper class of Switch",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "onChange",
    description: "Change checked status event",
    default: null,
    required: true,
    type: "none",
    typeLabel: "(checked: boolean) => void",
  },
];
