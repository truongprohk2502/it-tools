import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const spinnerProperties: UIField[] = [
  {
    name: "variant",
    description: "Variant theme of Spinner",
    default: '"clip"',
    required: false,
    type: "radio",
    radioList: ["clip", "fade", "scale", "bounce", "pulse"],
  },
  {
    name: "size",
    description: "Size of Spinner",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "color",
    description: "Color of Spinner",
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
    name: "className",
    description: "Wrapper class",
    default: null,
    required: true,
    type: "none",
  },
];
