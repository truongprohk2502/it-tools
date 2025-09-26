import { useMemo } from "react";
import { SvgType } from "../../types";

const EyebrowUp: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g
          transform={
            isSvg ? "translate(-40, -10) scale(1.5)" : "translate(33, 78)"
          }
        >
          <title>eyebrows - up</title>
          <path
            d="M99 10.2143C104.667 7.5476 118 5.11427 126 16.7143"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M23.5791 35.521C25.6497 29.6104 33.2612 18.3959 47.1418 20.8224"
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

export default EyebrowUp;
