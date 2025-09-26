import { useMemo } from "react";
import { SvgType } from "../../types";

const TopFunny: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g
          transform={
            isSvg ? "translate(-80, 30) scale(1.6)" : "translate(-30, -12)"
          }
        >
          <title>tops - funny</title>
          <path
            d="M140 56C154.667 55.3333 180.4 47.2 166 20"
            stroke={color}
            strokeWidth="4"
          />
          <path
            d="M114 54C128.667 53.3333 154.4 45.2 140 18"
            stroke={color}
            strokeWidth="4"
          />
          <path
            d="M78 65C92.6667 64.3333 118.4 56.2 104 29"
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
      width="240"
      height="200"
      viewBox="0 0 240 200"
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

export default TopFunny;
