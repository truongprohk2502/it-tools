import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const codeSnippetProperties: UIField[] = [
  {
    name: "code",
    description: "CodeSnippet content",
    default: null,
    required: true,
    type: "string",
  },
  {
    name: "size",
    description: "Size of CodeSnippet",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "color",
    description: "Color of CodeSnippet",
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
    name: "showCopy",
    description: "Show copy button",
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
    name: "labelClassName",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
