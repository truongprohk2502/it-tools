import { useMemo } from "react";
import { SvgType } from "../../types";

const MouthSad: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(90, 160)"}>
          <title>mouth - sad</title>
          <path
            d="M13 46C14.7153 38.0427 21.0708 21.2329 32.7708 17.6522C44.4708 14.0714 50.4653 26.1068 52 32.5721"
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

export default MouthSad;
