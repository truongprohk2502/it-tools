import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";

export const otpInputProperties: UIField[] = [
  {
    name: "total",
    description: "The number of characters to be entered",
    default: "5",
    required: false,
    type: "number",
  },
  {
    name: "separator",
    description: "Separator between inputs",
    default: null,
    required: false,
    type: "none",
    typeLabel: "React.ReactNode",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "separatorClassName",
    description: "Separator class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "inputClassName",
    description: "Input class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "onFinish",
    description: "Event when finishing enter code",
    default: null,
    required: false,
    type: "none",
    typeLabel: "(otp: string) => void",
  },
];
