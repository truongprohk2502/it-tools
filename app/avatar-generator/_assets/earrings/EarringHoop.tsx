import { useMemo } from "react";
import { SvgType } from "../../types";

const EarringHoop: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(4, 163)"}>
          <title>earrings - hoop</title>
          <path
            d="M26 2C39.2548 2 50 12.7452 50 26C50 39.2548 39.2548 50 26 50C12.7452 50 2 39.2548 2 26C2 19.6087 5.5 14.5 8.5715 9.5L9.5 8"
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
      width="52"
      height="52"
      viewBox="0 0 52 52"
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

export default EarringHoop;
