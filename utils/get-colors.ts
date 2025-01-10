import tinycolor from "tinycolor2";

export const getContrastTextColor = (hex: string) => {
  return tinycolor(hex).isDark() ? "white" : "black";
};

export const getRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
