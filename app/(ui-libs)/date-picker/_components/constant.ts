import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const datePickerProperties: UIField[] = [
  {
    name: "value",
    description: "Value of DatePicker",
    default: null,
    required: true,
    type: "none",
  },
  {
    name: "disabled",
    description: "Disabled status",
    default: "false",
    required: false,
    type: "boolean",
  },
  {
    name: "onChange",
    description: "Change value event handler",
    default: null,
    required: true,
    type: "none",
    typeLabel: "(value: string) => void",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
];
