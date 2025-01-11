import convert from "color-convert";
import { RGB } from "color-convert/conversions";
import range from "lodash/range";
import tinycolor from "tinycolor2";
import type { RgbType } from "./types";

export const checkIsValidHex = (hex: string) => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const hexRegex2 = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexRegex.test(hex) || hexRegex2.test(hex);
};

export const checkIsValidRgb = (rgb: RgbType) => {
  const red = Number(rgb.red);
  const green = Number(rgb.green);
  const blue = Number(rgb.blue);
  if (!Number.isInteger(red) || red < 0 || red > 255) return false;
  if (!Number.isInteger(green) || green < 0 || green > 255) return false;
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) return false;
  return true;
};

type HslType = {
  hue: number | string;
  saturation: number | string;
  lightness: number | string;
};

export const checkIsValidHsl = (hsl: HslType) => {
  const hue = Number(hsl.hue);
  const saturation = Number(hsl.saturation);
  const lightness = Number(hsl.lightness);
  if (!Number.isInteger(hue) || hue < 0 || hue > 360) return false;
  if (!Number.isInteger(saturation) || saturation < 0 || saturation > 100)
    return false;
  if (!Number.isInteger(lightness) || lightness < 0 || lightness > 100)
    return false;
  return true;
};

export const generateShadeColors = (hex: string) => {
  const [r, g, b] = convert.hex.rgb(hex);
  return range(0, 11).map((i) => {
    const rgb = [
      Math.max(0, Math.floor(r * (1 - i * 0.1))),
      Math.max(0, Math.floor(g * (1 - i * 0.1))),
      Math.max(0, Math.floor(b * (1 - i * 0.1))),
    ];
    return "#" + convert.rgb.hex(rgb as RGB);
  });
};

export const generateTintColors = (hex: string) => {
  const [r, g, b] = convert.hex.rgb(hex);
  return range(0, 11).map((i) => {
    const rgb = [
      Math.min(255, r + (255 - r) * i * 0.1),
      Math.min(255, g + (255 - g) * i * 0.1),
      Math.min(255, b + (255 - b) * i * 0.1),
    ];
    return "#" + convert.rgb.hex(rgb as RGB);
  });
};

export const getContrastTextColor = (hex: string) => {
  return tinycolor(hex).isDark() ? "white" : "black";
};

export const getRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
