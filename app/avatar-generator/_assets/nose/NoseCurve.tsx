import { useMemo } from "react";
import { SvgType } from "../../types";

const NoseCurve: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(98, 128)"}>
          <title>nose - curve</title>
          <path
            d="M16.5 7C16.1667 10.8333 16.5 19.2 20.5 22C25.5 25.5 20 34 10 32"
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
      width="32"
      height="40"
      viewBox="0 0 32 40"
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

export default NoseCurve;
