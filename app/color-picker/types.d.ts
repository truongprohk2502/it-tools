export type RgbType = {
  red: number | string;
  green: number | string;
  blue: number | string;
};

export type HslType = {
  hue: number;
  saturation: number;
  lightness: number;
};

export type ChangeColorProps =
  | { type: "pick"; data: string }
  | { type: "hex"; data: string }
  | { type: "rgb"; data: RgbType }
  | { type: "hsl"; data: HslType };

export type RgbValue = "red" | "green" | "blue";

export type HslValue = "hue" | "saturation" | "lightness";
