import { useMemo } from "react";
import { SvgType } from "../../types";

const MouthPucker: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(-5, 0)" : "translate(87, 163)"}>
          <title>mouth - pucker</title>
          <path
            d="M26 16.6965C30.1667 14.3631 47 11.3964 47 18.1964C47 26.6964 35.5 26.1965 35.5 26.1965C35.5 26.1965 48.5447 23.0354 46 32.1965C43.5 41.1965 36.5 37.6965 34.5 36.6965"
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

export default MouthPucker;
