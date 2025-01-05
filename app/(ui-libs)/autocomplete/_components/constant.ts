import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const autocompleteProperties: UIField[] = [
  {
    name: "value",
    description: "Input value",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "options",
    description: "Options of Autocomplete",
    default: "[]",
    required: false,
    type: "none",
  },
  {
    name: "placeholder",
    description: "Placeholder of Autocomplete",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "className",
    description: "Wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "disabled",
    description: "Disabled status",
    default: "false",
    required: false,
    type: "boolean",
  },
];
