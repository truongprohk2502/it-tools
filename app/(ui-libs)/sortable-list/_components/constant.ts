import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const sortableListProperties: UIField[] = [
  {
    name: "data",
    description: "List items of SortableList",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "renderItem",
    description: "Render function of SortableList",
    default: null,
    required: true,
    type: "none",
    typeLabel: "(data) => ReactNode",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "onChange",
    description: "Ordered change event",
    default: null,
    required: false,
    type: "none",
    typeLabel: "(orderedIds: string[]) => void",
  },
];
