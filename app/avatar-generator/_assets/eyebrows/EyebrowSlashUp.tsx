import { useMemo } from "react";
import { SvgType } from "../../types";

const EyebrowLashesUp: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g
          transform={
            isSvg ? "translate(-40, -10) scale(1.5)" : "translate(30, 75)"
          }
        >
          <title>eyebrows - eyelashesup</title>
          <path
            d="M99 13.2143C104.667 10.5476 118 8.11427 126 19.7143"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M23.5791 38.521C25.6497 32.6104 33.2612 21.3959 47.1418 23.8224"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M26.0742 32.4578L19.9258 27.0312"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M122.961 14.157L129.109 8.73047"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M32.5233 26.8142L28.4766 19.6816"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M115.512 10.5135L119.559 3.38086"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M40.5994 23.2005L38.3984 15.3008"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M106.436 9.89973L108.637 2"
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
      height="51"
      viewBox="0 0 149 51"
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

export default EyebrowLashesUp;
