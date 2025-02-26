import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const drawerProperties: UIField[] = [
  {
    name: "title",
    description: "Title of Drawer",
    default: null,
    required: false,
    type: "string",
  },
  {
    name: "open",
    description: "Open status",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "position",
    description: "Position of Drawer",
    default: '"right"',
    required: false,
    type: "radio",
    radioList: ["left", "right"],
  },
  {
    name: "hideHeaderClose",
    description: "Hide close button at header",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "overlayCancel",
    description: "Enable click overlay to close Drawer",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "hasFooterCancel",
    description: "Show cancel button at footer",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "hasFooterConfirm",
    description: "Show confirm button at footer",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "confirmTitle",
    description: "Confirm button text",
    default: "Confirm",
    required: false,
    type: "string",
  },
  {
    name: "children",
    description: "Drawer body content",
    default: null,
    required: true,
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
    name: "wrapperClassName",
    description: "Content wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "onConfirm",
    description: "Click confirm handler",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "onClose",
    description: "Close drawer handler",
    default: null,
    required: false,
    type: "none",
  },
];
