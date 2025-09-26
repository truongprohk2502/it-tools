import { useMemo } from "react";
import { SvgType } from "../../types";

const MouthSmirk: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(90, 160)"}>
          <title>mouth - smirk</title>
          <path
            d="M10.0007 24.1649C14.941 30.6115 22.4277 37.7537 33.9767 36.125C45.5257 34.4963 50.6642 26.5297 49.1492 20.0779"
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
      width="64"
      height="64"
      viewBox="0 0 64 64"
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

export default MouthSmirk;
