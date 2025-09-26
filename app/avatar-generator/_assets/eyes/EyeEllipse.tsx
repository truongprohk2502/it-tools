import { useMemo } from "react";
import { SvgType } from "../../types";

const EyeEllipse: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g transform={isSvg ? "translate(0, 0)" : "translate(60, 95)"}>
          <title>eyes - ellipse</title>
          <ellipse
            cx="16.5301"
            cy="29.4023"
            rx="9"
            ry="13.5"
            transform="rotate(-6.77646 16.5301 29.4023)"
            fill={color}
          />
          <ellipse
            cx="80.5312"
            cy="19.4021"
            rx="9"
            ry="13.5"
            transform="rotate(-6.27568 80.5312 19.4021)"
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

export default EyeEllipse;
