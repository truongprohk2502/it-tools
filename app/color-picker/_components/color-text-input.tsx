"use client";

import { Input } from "@/components/ui/input";
import { ColorType } from "../constants";
import type { HslType, RgbType, RgbValue } from "../types";

interface Props {
  colorType: ColorType;
  hex: string;
  rgb: RgbType;
  hsl: HslType;
  onChangeHex: (hex: string) => void;
  onChangeRgb: (data: string, type: RgbValue) => void;
  onChangeHsl: (data: string, type: "hue" | "saturation" | "lightness") => void;
}

const ColorTextInput: React.FC<Props> = ({
  colorType,
  hex,
  rgb,
  hsl,
  onChangeHex,
  onChangeRgb,
  onChangeHsl,
}) => {
  return (
    <div className="mr-4 flex flex-1 gap-4">
      {colorType === ColorType.RGB ? (
        <>
          <div className="flex-1">
            <Input
              className="w-full text-center"
              value={rgb.red}
              onChange={(e) => onChangeRgb(e.target.value, "red")}
            />
            <p className="mt-2 text-center font-semibold">R</p>
          </div>
          <div className="flex-1">
            <Input
              className="w-full text-center"
              value={rgb.green}
              onChange={(e) => onChangeRgb(e.target.value, "green")}
            />
            <p className="mt-2 text-center font-semibold">G</p>
          </div>
          <div className="flex-1">
            <Input
              className="w-full text-center"
              value={rgb.blue}
              onChange={(e) => onChangeRgb(e.target.value, "blue")}
            />
            <p className="mt-2 text-center font-semibold">B</p>
          </div>
        </>
      ) : colorType === ColorType.HSL ? (
        <>
          <div className="flex-1">
            <Input
              className="w-full text-center"
              value={hsl.hue}
              onChange={(e) => onChangeHsl(e.target.value, "hue")}
            />
            <p className="mt-2 text-center font-semibold">H</p>
          </div>
          <div className="flex-1">
            <Input
              className="w-full text-center"
              value={hsl.saturation}
              onChange={(e) => onChangeHsl(e.target.value, "saturation")}
            />
            <p className="mt-2 text-center font-semibold">S</p>
          </div>
          <div className="flex-1">
            <Input
              className="w-full text-center"
              value={hsl.lightness}
              onChange={(e) => onChangeHsl(e.target.value, "lightness")}
            />
            <p className="mt-2 text-center font-semibold">L</p>
          </div>
        </>
      ) : (
        <div className="w-full">
          <Input
            className="w-full"
            value={hex}
            onChange={(e) => onChangeHex(e.target.value)}
          />
          <p className="mt-2 text-center font-semibold">HEX</p>
        </div>
      )}
    </div>
  );
};

export default ColorTextInput;
