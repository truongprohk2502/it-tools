import { SVGProps } from "react";

const OpacityIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 76 76"
      version="1.1"
      baseProfile="full"
      enableBackground="new 0 0 76.00 76.00"
      xmlSpace="preserve"
      {...props}
    >
      <linearGradient
        id="SVGID_Fill1_"
        gradientUnits="objectBoundingBox"
        x1="0.853553"
        y1="0.853553"
        x2="1.85355"
        y2="0.853553"
        gradientTransform="rotate(225.000000 0.853553 0.853553)"
      >
        <stop offset="0" stopColor="currentColor" stopOpacity="0" />
        <stop offset="1" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>
      <path
        fill="url(#SVGID_Fill1_)"
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 19,19L 25.3333,19L 25.3333,25.3333L 31.6667,25.3333L 31.6667,19L 38,19L 38,25.3333L 44.3333,25.3333L 44.3333,19L 50.6667,19L 50.6667,25.3333L 57,25.3333L 57,31.6667L 50.6667,31.6667L 50.6667,38L 57,38L 57,44.3333L 50.6667,44.3333L 50.6667,50.6667L 57,50.6667L 57,57L 50.6667,57L 50.6667,50.6667L 44.3333,50.6667L 44.3333,57L 38,57L 38,50.6667L 31.6667,50.6667L 31.6667,57L 25.3333,57L 25.3333,50.6667L 19,50.6667L 19,44.3333L 25.3333,44.3333L 25.3333,38L 19,38L 19,31.6667L 25.3333,31.6667L 25.3333,25.3333L 19,25.3333L 19,19 Z M 50.6667,38L 44.3333,38L 44.3333,44.3333L 50.6667,44.3333L 50.6667,38 Z M 50.6667,25.3333L 44.3333,25.3333L 44.3333,31.6667L 50.6667,31.6667L 50.6667,25.3333 Z M 44.3333,44.3333L 38,44.3333L 38,50.6667L 44.3333,50.6667L 44.3333,44.3333 Z M 38,44.3333L 38,38L 31.6667,38L 31.6667,44.3333L 38,44.3333 Z M 31.6667,44.3333L 25.3333,44.3333L 25.3333,50.6667L 31.6667,50.6667L 31.6667,44.3333 Z M 44.3333,31.6667L 38,31.6667L 38,38L 44.3333,38L 44.3333,31.6667 Z M 38,31.6667L 38,25.3333L 31.6667,25.3333L 31.6666,31.6667L 38,31.6667 Z M 31.6666,31.6667L 25.3333,31.6667L 25.3333,38L 31.6667,38L 31.6666,31.6667 Z "
      />
    </svg>
  );
};

export default OpacityIcon;
