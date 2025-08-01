"use client";

import { CheckIcon } from "lucide-react";
import { Color } from "../constants";

interface Props {
  colorHex: Color;
  active: Color;
  onClick: React.Dispatch<React.SetStateAction<Color>>;
}

const ColorItem: React.FC<Props> = ({ colorHex, active, onClick }) => {
  return (
    <div
      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full"
      style={{ backgroundColor: colorHex }}
      onClick={() => onClick(colorHex)}
    >
      {active === colorHex && <CheckIcon className="h-4 w-4 text-white" />}
    </div>
  );
};

export default ColorItem;
