export enum ColorType {
  HEX = "hex",
  HSL = "hsl",
  RGB = "rgb",
}

export enum FullColorType {
  HEX = "HEX",
  HSL = "HSL",
  RGB = "RGB",
  XYZ = "XYZ",
  CMYK = "CMYK",
  HSV = "HSV",
  LAB = "LAB",
  HWB = "HWB",
  ANSI16 = "ANSI16",
  ANSI256 = "ANSI256",
}

export const COLOR_TYPES = [
  FullColorType.HEX,
  FullColorType.HSL,
  FullColorType.RGB,
  FullColorType.XYZ,
  FullColorType.CMYK,
  FullColorType.HSV,
  FullColorType.LAB,
  FullColorType.HWB,
  FullColorType.ANSI16,
  FullColorType.ANSI256,
];

export const CONTRAST_LEVELS = ["Ugly", "Bad", "Medium", "Good", "Great"];
