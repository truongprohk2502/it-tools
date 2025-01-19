import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const textareaProperties: UIField[] = [
  {
    name: "label",
    description: "Label of Textarea",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "placeholder",
    description: "Placeholder of Textarea",
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
    description: "Size of Textarea",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "isFloatLabel",
    description: "Label is floated inside Textarea",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "disabled",
    description: "Disabled status of Textarea",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "wrapperClassName",
    description: "Wrapper class of Textarea",
    default: null,
    required: false,
    type: "none",
  },
];
