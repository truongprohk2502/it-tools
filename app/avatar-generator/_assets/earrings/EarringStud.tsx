import { useMemo } from "react";
import { SvgType } from "../../types";

const EarringStud: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g
          transform={
            isSvg ? "translate(-25, 15) scale(2)" : "translate(-1, 167)"
          }
        >
          <title>earrings - stud</title>
          <circle cx="25" cy="4" r="4" fill={color} />
          <circle cx="26" cy="3" r="1" fill="black" />
        </g>
      </g>
    ),
    [color, isSvg],
  );

  return isSvg ? (
    <svg
      width="48"
      height="50"
      viewBox="0 0 48 50"
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

export default EarringStud;
