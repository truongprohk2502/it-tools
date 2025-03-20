import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const emojiReactionProperties: UIField[] = [
  {
    name: "emojis",
    description: "Emoji list",
    default: null,
    required: true,
    type: "none",
    typeLabel: "string[]",
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
];
