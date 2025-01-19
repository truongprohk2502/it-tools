import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const galleriaProperties: UIField[] = [
  {
    name: "images",
    description: "Image links list",
    default: null,
    required: true,
    type: "none",
    typeLabel: "Array<{ photoUrl: string; thumbUrl: string }>",
  },
  {
    name: "animation",
    description: "Animation when switching images",
    default: "true",
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
];
