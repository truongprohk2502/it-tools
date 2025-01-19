import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const dropdownProperties: UIField[] = [
  {
    name: "value",
    description: "Value of Dropdown",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "placeholder",
    description: "Placeholder text of Dropdown",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "disabled",
    description: "Disabled status of Dropdown",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "options",
    description: "Options list of Dropdown",
    default: null,
    required: true,
    type: "none",
    typeLabel: "Array<{ label: string; value: string }>",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
