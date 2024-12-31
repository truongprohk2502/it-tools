import type { UIField } from "@/components/ui-libs/ui-docs";

export const buttonProperties: UIField[] = [
  {
    name: "size",
    description: "Size of button",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "radius",
    description: "Border radius of button",
    default: '"large"',
    required: false,
    type: "radio",
    radioList: ["none", "large", "full"],
  },
  {
    name: "variant",
    description: "Variant theme of button",
    default: '"solid"',
    required: false,
    type: "radio",
    radioList: ["solid", "soft", "outline"],
  },
  {
    name: "buttonColor",
    description: "Color of button",
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
    name: "disabled",
    description: "Disabled status of button",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "children",
    description: "Label of button",
    default: null,
    required: true,
    type: "string",
  },
];
