import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const avatarProperties: UIField[] = [
  {
    name: "src",
    description: "Avatar image url",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "name",
    description: "Avatar name",
    default: "-",
    required: true,
    type: "string",
  },
  {
    name: "size",
    description: "Size of Avatar",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "radius",
    description: "Border radius of Avatar",
    default: '"full"',
    required: false,
    type: "radio",
    radioList: ["small", "large", "full"],
  },
  {
    name: "hideImage",
    description: "Whether hide avatar image",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "bordered",
    description: "Whether has border around avatar",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "randomFallbackColor",
    description:
      "Whether generate a random background color for avatar is unavailable",
    default: "false",
    required: false,
    type: "boolean",
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
    description: "Wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "imageClassName",
    description: "Image class name",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "fallbackClassName",
    description: "Fallback wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
];
