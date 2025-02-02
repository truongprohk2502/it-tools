import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const watermarkProperties: UIField[] = [
  {
    name: "width",
    description: "Width of Watermark label",
    default: null,
    required: true,
    type: "number",
  },
  {
    name: "height",
    description: "Height of Watermark label",
    default: null,
    required: true,
    type: "number",
  },
  {
    name: "text",
    description: "Label of Watermark",
    default: null,
    required: true,
    type: "string",
  },
  {
    name: "color",
    description: "Color of text",
    default: "#000",
    required: false,
    type: "none",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "children",
    description: "Content embedding Watermark",
    default: null,
    required: false,
    type: "none",
    typeLabel: "ReactNode",
  },
];
