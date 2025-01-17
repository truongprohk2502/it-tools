import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const carouselProperties: UIField[] = [
  {
    name: "infiniteLoop",
    description: "Loop the carousel when reaching the end",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "showIndicator",
    description: "Show the indicator of pages",
    default: "true",
    required: false,
    type: "boolean",
  },
  {
    name: "autoplay",
    description: "Autoplay interval in milliseconds. Needs infinite loop",
    default: "3000",
    required: false,
    type: "number",
  },
  {
    name: "disabledAutoplay",
    description: "Disable autoplay",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "show",
    description: "Number of items to show",
    default: "1",
    required: false,
    type: "number",
  },
  {
    name: "children",
    description: "Body content of Carousel",
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
    name: "itemClassName",
    description: "Class of each child item",
    default: null,
    required: false,
    type: "none",
  },
];
