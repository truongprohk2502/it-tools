import { useMemo } from "react";
import { SvgType } from "../../types";

const TopClean: React.FC<SvgType> = ({
  isSvg,
  color = "#D3D3D3",
  ...props
}) => {
  const childElement = useMemo(
    () => (
      <g>
        <g
          transform={
            isSvg ? "translate(-170, -20) scale(2)" : "translate(-35, -10)"
          }
        >
          <title>tops - clean</title>
          <ellipse
            cx="147.854"
            cy="58.1803"
            rx="6.85759"
            ry="18.4393"
            transform="rotate(117 147.854 58.1803)"
            fill={color}
          />
        </g>
      </g>
    ),
    [color, isSvg],
  );

  return isSvg ? (
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
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

export default TopClean;
