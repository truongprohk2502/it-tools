"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import range from "lodash/range";
import round from "lodash/round";
import { useEffect, useState } from "react";
import tinycolor from "tinycolor2";
import { CONTRAST_LEVELS } from "../constants";

interface Props {
  hex: string;
}

const ColorContrast: React.FC<Props> = ({ hex }) => {
  const [bgColor, setBgColor] = useState<string>(hex);
  const [textColor, setTextColor] = useState<string>("#ffffff");

  useEffect(() => {
    setBgColor(hex);
  }, [hex]);

  const contrastRatio = round(tinycolor.readability(bgColor, textColor), 2);

  const getRating = () => {
    if (contrastRatio >= 7) return 5;
    if (contrastRatio >= 4.5) return 4;
    if (contrastRatio >= 3) return 3;
    if (contrastRatio >= 2) return 2;
    else return 1;
  };

  const handleSwapColor = () => {
    const tempColor = bgColor;
    setBgColor(textColor);
    setTextColor(tempColor);
  };

  return (
    <div className="mt-4 flex w-full rounded-lg border border-neutral-400">
      <div className="flex-1 px-6 py-3">
        <p className="text-lg font-semibold">Contrast checker</p>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold">Text color</p>
            <Input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Background color</p>
            <Input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold">Contrast</p>
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-bold">{contrastRatio}</p>
          <div className="flex">
            <p className="mr-2 font-bold">{CONTRAST_LEVELS[getRating() - 1]}</p>
            <div className="flex items-center gap-2">
              {range(1, 6).map((star) =>
                star <= getRating() ? (
                  <StarFilledIcon key={star} width={20} height={20} />
                ) : (
                  <StarIcon key={star} width={20} height={20} />
                ),
              )}
            </div>
          </div>
        </div>
        <Button className="mb-2 mt-4 font-medium" onClick={handleSwapColor}>
          Swap color
        </Button>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <p className="px-4 py-4 text-center text-sm font-semibold italic">
          Everybody is a Genius. But If
          <br />
          You Judge a Fish by Its
          <br />
          Ability to Climb a Tree, It Will
          <br />
          Live Its Whole Life
          <br />
          Believing that It is Stupid.
          <br />- Albert Einstein
        </p>
      </div>
    </div>
  );
};

export default ColorContrast;
