import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const speedDialProperties: UIField[] = [
  {
    name: "color",
    description: "Color of SpeedDial button",
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
    name: "position",
    description: "Position of menu bar",
    default: '"bottom"',
    required: false,
    type: "radio",
    radioList: ["top", "right", "bottom", "left"],
  },
  {
    name: "items",
    description: "List of SpeedDial items",
    default: null,
    required: true,
    type: "none",
    typeLabel: "Array<{ icon, onClick }>",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
