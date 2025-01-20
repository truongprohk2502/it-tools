import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const swapButtonProperties: UIField[] = [
  {
    name: "variant",
    description: "Variant theme of SwapButton",
    default: '"none"',
    required: false,
    type: "radio",
    radioList: ["none", "fade", "spin", "flip"],
  },
  {
    name: "isOn",
    description: "Whether SwapButton is on",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "onItem",
    description: "Item to show when SwapButton is on",
    default: null,
    required: true,
    type: "none",
    typeLabel: "ReactNode",
  },
  {
    name: "offItem",
    description: "Item to show when SwapButton is off",
    default: null,
    required: true,
    type: "none",
    typeLabel: "ReactNode",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "onToggle",
    description: "Toggle handler",
    default: null,
    required: true,
    type: "none",
    typeLabel: "() => void",
  },
];
