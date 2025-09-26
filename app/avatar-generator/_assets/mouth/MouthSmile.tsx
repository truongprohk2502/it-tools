import { useMemo } from "react";
import { SvgType } from "../../types";

const MouthSmile: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(5, 0)" : "translate(87, 163)"}>
          <title>mouth - smile</title>
          <path
            d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23"
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
      width="67"
      height="64"
      viewBox="0 0 67 64"
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

export default MouthSmile;
