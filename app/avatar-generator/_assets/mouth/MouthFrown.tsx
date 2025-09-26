import { useMemo } from "react";
import { SvgType } from "../../types";

const MouthFrown: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(75, 160)"}>
          <title>mouth - frown</title>
          <path
            d="M2 41C5.21065 33.0427 17.1069 16.2329 39.0069 12.6522C60.9069 9.07139 72.1273 21.1068 75 27.5721"
            stroke={color}
            strokeWidth="4"
          />
        </g>
      </g>
    ),
    [color, isSvg],
  );

  return isSvg ? (
    <svg
      width="77"
      height="64"
      viewBox="0 0 77 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {childElement}
    </svg>
  ) : (
    childElement
  );
};

export default MouthFrown;
