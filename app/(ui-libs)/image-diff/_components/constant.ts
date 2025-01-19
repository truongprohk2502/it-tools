import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const imageDiffProperties: UIField[] = [
  {
    name: "imgSrcLeft",
    description: "Left image url",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "imgSrcRight",
    description: "Right image url",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "resizePosition",
    description: "Initial resize position of ImageDiff",
    default: "50",
    required: false,
    type: "number",
  },
  {
    name: "size",
    description:
      "Size of image. Can be fixed size with 'width' and 'height' or based on image ratio with 'ratio'",
    default: null,
    required: false,
    type: "none",
    typeLabel: "{ width: number; height: number } | { ratio: number }",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
