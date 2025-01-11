export enum NumberFormatType {
  Binary = "2",
  Octal = "8",
  Decimal = "10",
  Hexadecimal = "16",
}

export const NUMBER_FORMATS = [
  { label: "Binary", value: NumberFormatType.Binary },
  { label: "Octal", value: NumberFormatType.Octal },
  { label: "Decimal", value: NumberFormatType.Decimal },
  { label: "Hexadecimal", value: NumberFormatType.Hexadecimal },
];
