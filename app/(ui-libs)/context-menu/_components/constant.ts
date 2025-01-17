import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const contextMenuProperties: UIField[] = [
  {
    name: "items",
    description: "Items list",
    default: null,
    required: true,
    type: "none",
    typeLabel: "ItemType[]",
  },
  {
    name: "children",
    description: "Area that implementing ContextMenu",
    default: null,
    required: true,
    type: "none",
    typeLabel: "ReactNode",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "wrapperClassName",
    description: "Wrapper class of body content",
    default: null,
    required: false,
    type: "none",
  },
];
