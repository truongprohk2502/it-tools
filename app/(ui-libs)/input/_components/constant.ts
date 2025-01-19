import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const inputProperties: UIField[] = [
  {
    name: "label",
    description: "Label of Input",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "placeholder",
    description: "Placeholder of Input",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "error",
    description: "Error message",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "inputSize",
    description: "Size of Input",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "isFloatLabel",
    description: "Label is floated inside Input",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "disabled",
    description: "Disabled status of Input",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "wrapperClassName",
    description: "Wrapper class of Input",
    default: null,
    required: false,
    type: "none",
  },
];
