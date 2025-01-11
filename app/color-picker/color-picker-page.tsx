"use client";

import ColorIcon from "@/assets/icons/color.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import convert from "color-convert";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorContrast from "./_components/color-contrast";
import ColorConversion from "./_components/color-conversion";
import ColorDisplay from "./_components/color-display";
import ColorImage from "./_components/color-image";
import ColorTextInput from "./_components/color-text-input";
import ColorVariant from "./_components/color-variant";
import { ColorType } from "./constants";
import { checkIsValidHex, checkIsValidHsl, checkIsValidRgb } from "./helpers";
import type {
  ChangeColorProps,
  HslType,
  HslValue,
  RgbType,
  RgbValue,
} from "./types";

const ColorPickerPage: React.FC = () => {
  const [color, setColor] = useState<string>("#000000");
  const [hex, setHex] = useState<string>("#000000");
  const [rgb, setRgb] = useState<RgbType>({ red: 0, green: 0, blue: 0 });
  const [hsl, setHsl] = useState<HslType>({
    hue: 0,
    saturation: 0,
    lightness: 0,
  });
  const [colorType, setColorType] = useState<ColorType>(ColorType.HEX);
  const [pickingFromImage, setPickingFromImage] = useState<boolean>(false);

  const changeColor = (props: ChangeColorProps) => {
    switch (props.type) {
      case "pick": {
        const hex = props.data;
        setHex(hex);
        const [red, green, blue] = convert.hex.rgb(hex);
        setRgb({ red, green, blue });
        const [hue, saturation, lightness] = convert.hex.hsl(hex);
        setHsl({ hue, saturation, lightness });
        break;
      }
      case "hex": {
        let hex = props.data;
        if (!hex.startsWith("#")) {
          hex = "#" + hex;
        }
        if (hex.length === 4) {
          hex =
            "#" +
            hex
              .slice(1)
              .split("")
              .map((item) => item + item)
              .join("");
        }
        setColor(hex.toLowerCase());
        const [red, green, blue] = convert.hex.rgb(hex);
        setRgb({ red, green, blue });
        const [hue, saturation, lightness] = convert.hex.hsl(hex);
        setHsl({ hue, saturation, lightness });
        break;
      }
      case "rgb": {
        const { red, green, blue } = props.data;
        const hex = "#" + convert.rgb.hex([+red, +green, +blue]);
        setColor(hex);
        setHex(hex);
        const [hue, saturation, lightness] = convert.rgb.hsl([
          +red,
          +green,
          +blue,
        ]);
        setHsl({ hue, saturation, lightness });
        break;
      }
      case "hsl": {
        const { hue, saturation, lightness } = props.data;
        const hex = "#" + convert.hsl.hex([hue, saturation, lightness]);
        setColor(hex);
        setHex(hex);
        const [red, green, blue] = convert.hsl.rgb([
          hue,
          saturation,
          lightness,
        ]);
        setRgb({ red, green, blue });
        break;
      }
      default:
        break;
    }
  };

  const handleChangeColor = (hex: string) => {
    setColor(hex);
    changeColor({ type: "pick", data: hex });
  };

  const handleChangeHex = (hex: string) => {
    setHex(hex);
    if (checkIsValidHex(hex)) changeColor({ type: "hex", data: hex });
  };

  const handleChangeRgb = (data: string, type: RgbValue) => {
    const newRgb = { ...rgb, [type]: data };
    setRgb(newRgb);
    if (checkIsValidRgb(newRgb)) changeColor({ type: "rgb", data: newRgb });
  };

  const handleChangeHsl = (data: string, type: HslValue) => {
    const newHsl = { ...hsl, [type]: data };
    setHsl(newHsl);
    if (checkIsValidHsl(newHsl)) changeColor({ type: "hsl", data: newHsl });
  };

  return (
    <div className="mx-auto min-w-[42rem] max-w-[60rem]">
      <ToolHeader
        title="Color Picker"
        description="Ability to upload an image or from color dashboard and get the RGB Color, HEX Color and HSL Color code."
        href={Route.ColorPicker}
        icon={ColorIcon}
      />
      <div
        className={cn("flex flex-col items-center px-8", {
          hidden: pickingFromImage,
        })}
      >
        <HexColorPicker
          color={color}
          onChange={handleChangeColor}
          style={{ width: "20rem", height: "20rem" }}
        />
        <div className="mt-4 flex w-[20rem]">
          <ColorTextInput
            hex={hex}
            rgb={rgb}
            hsl={hsl}
            colorType={colorType}
            onChangeHex={handleChangeHex}
            onChangeRgb={handleChangeRgb}
            onChangeHsl={handleChangeHsl}
          />
          <Select
            value={colorType}
            onValueChange={(val) => setColorType(val as ColorType)}
          >
            <SelectTrigger className="w-[80px] flex-shrink-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={ColorType.HEX}>HEX</SelectItem>
                <SelectItem value={ColorType.RGB}>RGB</SelectItem>
                <SelectItem value={ColorType.HSL}>HSL</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-4" onClick={() => setPickingFromImage(true)}>
          Pick color from image
        </Button>
        <div className="mb-16 w-full">
          <ColorDisplay hex={color} />
          <ColorConversion hex={color} />
          <ColorVariant hex={color} />
          <ColorContrast hex={color} />
        </div>
      </div>
      <div
        className={cn("flex flex-col items-center px-8", {
          hidden: !pickingFromImage,
        })}
      >
        <ColorImage
          onConfirm={handleChangeColor}
          onClose={() => setPickingFromImage(false)}
        />
      </div>
    </div>
  );
};

export default ColorPickerPage;
