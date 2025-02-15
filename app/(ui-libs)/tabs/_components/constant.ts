import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const tabsProperties: UIField[] = [
  {
    name: "variant",
    description: "Theme variant of Tabs",
    default: '"solid"',
    required: false,
    type: "radio",
    radioList: ["solid", "bordered", "underlined", "ghost"],
  },
  {
    name: "size",
    description: "Size of Tabs",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "radius",
    description: "Border radius of Tabs",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["none", "medium", "full"],
  },
  {
    name: "tabs",
    description: "List of tabs",
    default: null,
    required: true,
    type: "none",
    typeLabel: "Array<{title: string; disabled?: boolean}>",
  },
  {
    name: "selectedIndex",
    description: "Disabled status",
    default: null,
    required: true,
    type: "none",
    typeLabel: "number",
  },
  {
    name: "disabled",
    description: "Disabled status",
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
    name: "onChange",
    description: "Change active tab event",
    default: null,
    required: true,
    type: "none",
    typeLabel: "(index: number) => void",
  },
];
