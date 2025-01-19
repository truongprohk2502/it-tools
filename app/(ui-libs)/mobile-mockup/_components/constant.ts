import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const mobileMockupProperties: UIField[] = [
  {
    name: "size",
    description: "Size of MobileMockup",
    default: '"medium"',
    required: false,
    type: "radio",
    radioList: ["small", "medium", "large"],
  },
  {
    name: "edgeSize",
    description: "Edge thickness of MobileMockup",
    default: '"small"',
    required: false,
    type: "radio",
    radioList: ["small", "large"],
  },
  {
    name: "edgeRounded",
    description: "Edge thickness of MobileMockup",
    default: '"small"',
    required: false,
    type: "radio",
    radioList: ["small", "large", "none"],
  },
  {
    name: "topVariant",
    description: "Top header variant theme of MobileMockup",
    default: '"invisible"',
    required: false,
    type: "radio",
    radioList: [
      "pill",
      "small_ears",
      "large_ears",
      "one_dot_center",
      "two_dot_center",
      "one_dot_left",
      "drop_of_water",
      "invisible",
    ],
  },
  {
    name: "bottomVariant",
    description: "Bottom navigation button theme of MobileMockup",
    default: '"none"',
    required: false,
    type: "radio",
    radioList: ["home_bar", "navigate_shape", "navigate_icon", "none"],
  },
  {
    name: "showBackground",
    description: "Show background photo",
    default: "false",
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
  {
    name: "contentClassName",
    description: "Content wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "children",
    description: "Children content",
    default: null,
    required: false,
    type: "none",
    typeLabel: "ReactNode",
  },
];
