import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const angleSliderProperties: UIField[] = [
  {
    name: "value",
    description: "Angle initial value",
    default: "0",
    required: false,
    type: "none",
  },
  {
    name: "max",
    description: "Maximum angle value",
    default: "0",
    required: true,
    type: "number",
  },
  {
    name: "showLabel",
    description: "Whether to show label or not",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "labelSize",
    description: "Label size of AngleSlider",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "barSizePercent",
    description: "Percentage length of bar",
    default: "100",
    required: false,
    type: "number",
  },
  {
    name: "barThick",
    description: "Thickness of bar",
    default: '"2px"',
    required: false,
    type: "string",
  },
  {
    name: "size",
    description: "Size of AngleSlider in pixel, rem, or percentage",
    default: '"5rem"',
    required: false,
    type: "string",
  },
  {
    name: "onChange",
    description: "Event when changing value",
    default: "-",
    required: false,
    type: "none",
  },
  {
    name: "onEnd",
    description: "Event when stop rotating AngleSlider",
    default: "-",
    required: false,
    type: "none",
  },
];
