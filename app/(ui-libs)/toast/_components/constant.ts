import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const toastProperties: UIField[] = [
  {
    name: "position",
    description: "Position of Toast message",
    default: '"topRight"',
    required: false,
    type: "radio",
    radioList: [
      "topLeft",
      "topCenter",
      "topRight",
      "bottomLeft",
      "bottomCenter",
      "bottomRight",
    ],
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "textClassName",
    description: "Text class",
    default: null,
    required: false,
    type: "none",
  },
];
