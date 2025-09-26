import { useMemo } from "react";
import { SvgType } from "../../types";

const EyebrowDown: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g
          transform={
            isSvg ? "translate(-40, -10) scale(1.5)" : "translate(26, 80)"
          }
        >
          <title>eyebrows - down</title>
          <path
            d="M27 26.5C33.1667 29 48.1 29.5 58.5 11.5"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M94 4C99.1667 9.33333 112.1 16.8 122.5 4"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </g>
    ),
    [color, isSvg],
  );

  return isSvg ? (
    <svg
      width="149"
      height="48"
      viewBox="0 0 149 48"
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

export default EyebrowDown;
