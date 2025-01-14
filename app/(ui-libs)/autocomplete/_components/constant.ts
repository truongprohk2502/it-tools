import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const autocompleteProperties: UIField[] = [
  {
    name: "value",
    description: "Input value",
    default: "-",
    required: false,
    type: "string",
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
    type: "string",
  },
  {
    name: "className",
    description: "Wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "inputWrapperClassName",
    description: "Input wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "inputClassName",
    description: "Input class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "optionsWrapperClassName",
    description: "Options list wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "optionClassName",
    description: "Item option class name",
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
  {
    name: "onChange",
    description: "Change event of Autocomplete",
    default: "-",
    required: false,
    type: "none",
  },
];
