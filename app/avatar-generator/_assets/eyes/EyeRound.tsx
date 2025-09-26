import { useMemo } from "react";
import { SvgType } from "../../types";

const EyeRound: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(62, 97)"}>
          <title>eyes - round</title>
          <ellipse
            cx="16.1171"
            cy="28.9268"
            rx="9"
            ry="10"
            transform="rotate(-6.77646 16.1171 28.9268)"
            fill={color}
          />
          <ellipse
            cx="80.1486"
            cy="18.9231"
            rx="9"
            ry="10"
            transform="rotate(-6.27568 80.1486 18.9231)"
            fill={color}
          />
        </g>
      </g>
    ),
    [color, isSvg],
  );

  return isSvg ? (
    <svg
      width="96"
      height="48"
      viewBox="0 0 96 48"
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

export default EyeRound;
