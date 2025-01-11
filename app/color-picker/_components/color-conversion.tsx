"use client";

import { copyToClipboard } from "@/utils/copy-to-clipboard";
import convert from "color-convert";
import { CopyIcon } from "lucide-react";
import { COLOR_TYPES, FullColorType } from "../constants";

interface Props {
  hex: string;
}

const ColorConversion: React.FC<Props> = ({ hex }) => {
  const getValue = (type: FullColorType) => {
    switch (type) {
      case FullColorType.HEX:
        return hex;
      case FullColorType.HSL:
        return convert.hex.hsl(hex).join(", ");
      case FullColorType.RGB:
        return convert.hex.rgb(hex).join(", ");
      case FullColorType.XYZ:
        return convert.hex.xyz(hex).join(", ");
      case FullColorType.CMYK:
        return convert.hex.cmyk(hex).join(", ");
      case FullColorType.HSV:
        return convert.hex.hsv(hex).join(", ");
      case FullColorType.LAB:
        return convert.hex.lab(hex).join(", ");
      case FullColorType.HWB:
        return convert.hex.hwb(hex).join(", ");
      case FullColorType.ANSI256:
        return convert.hex.ansi256(hex);
      case FullColorType.ANSI16:
        return convert.hex.ansi16(hex);
      default:
        return "";
    }
  };

  const handleCopy = (type: FullColorType) => {
    const value = getValue(type).toString();
    copyToClipboard(value);
  };

  return (
    <div className="mt-4 w-full rounded-lg border border-neutral-400 px-6 py-3">
      <p className="mb-2 text-lg font-semibold">Color conversion</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {COLOR_TYPES.map((type) => (
          <div
            key={type}
            className="flex items-center justify-between rounded-lg border border-neutral-400 px-4 py-2"
          >
            <p className="font-medium">{`${type} ${getValue(type)}`}</p>
            <button
              className="cursor-pointer bg-transparent focus:outline-none"
              onClick={() => handleCopy(type)}
            >
              <CopyIcon width={16} height={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorConversion;
