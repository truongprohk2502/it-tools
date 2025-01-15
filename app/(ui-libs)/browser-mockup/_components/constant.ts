import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const browserMockupProperties: UIField[] = [
  {
    name: "variant",
    description: "Variant design of Mockup",
    default: '"compact"',
    required: false,
    type: "radio",
    radioList: ["compact", "full"],
  },
  {
    name: "href",
    description: "Website link on Mockup",
    default: null,
    required: true,
    type: "string",
  },
  {
    name: "title",
    description: "Website title on Mockup",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "hasButtonColor",
    description: "Show colors of browser buttons",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "contentClassName",
    description: "Content wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "children",
    description: "Children content",
    default: null,
    required: false,
    type: "none",
    typeLabel: "ReactNode",
  },
];
