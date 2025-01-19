import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const skeletonProperties: UIField[] = [
  {
    name: "shape",
    description: "Shape of Skeleton",
    default: '"square"',
    required: false,
    type: "radio",
    radioList: ["square", "circle"],
  },
  {
    name: "width",
    description: "Skeleton's width",
    default: '"100%"',
    required: false,
    type: "string",
    typeLabel: "string | number",
  },
  {
    name: "height",
    description: "Skeleton's height",
    default: '"auto"',
    required: false,
    type: "string",
    typeLabel: "string | number",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
