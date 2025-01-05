import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";
import type { UIChildField } from "../../_components/ui-child-docs";

export const accordionProperties: UIField[] = [
  {
    name: "variant",
    description: "Theme variant of Accordion",
    default: '"light"',
    required: false,
    type: "radio",
    radioList: ["light", "bordered", "splitted"],
  },
  {
    name: "selectMode",
    description: "Select mode of Accordion",
    default: '"single"',
    required: false,
    type: "radio",
    radioList: ["single", "multiple"],
  },
  {
    name: "className",
    description: "Wrapper class name",
    default: "-",
    required: false,
    type: "none",
  },
];

export const accordionItemProperties: UIChildField[] = [
  {
    name: "id",
    description: "Unique ID of AccordionItem",
    default: "-",
    required: true,
  },
  {
    name: "title",
    description: "Title of AccordionItem",
    default: "-",
    required: true,
  },
];
