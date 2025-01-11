import convert from "color-convert";
import { getContrastTextColor } from "../helpers";

interface Props {
  hex: string;
}

const ColorDisplay: React.FC<Props> = ({ hex }) => {
  return (
    <div
      className="mt-16 w-full rounded-lg px-6 py-3"
      style={{ backgroundColor: hex, color: getContrastTextColor(hex) }}
    >
      <p className="text-xl font-bold uppercase">{hex}</p>
      <p className="">{convert.hex.keyword(hex)}</p>
    </div>
  );
};

export default ColorDisplay;
