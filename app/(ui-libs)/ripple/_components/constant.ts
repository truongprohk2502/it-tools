import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const rippleProperties: UIField[] = [
  {
    name: "rippleColor",
    description: "Ripple color",
    default: null,
    required: true,
    type: "string",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
