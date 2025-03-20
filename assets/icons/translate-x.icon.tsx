import { SVGProps } from "react";

const TranslateXIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      version="1.1"
      {...props}
    >
      <g>
        <path
          d="M 0 4 L 0 17 L 13 17 L 13 4 L 0 4 z M 1 5 L 12 5 L 12 16 L 1 16 L 1 5 z M 16 8 L 18 10 L 14 10 L 14 11 L 18 11 L 16 13 L 17.5 13 L 20 10.5 L 17.5 8 L 16 8 z "
          fill="currentColor"
          fillOpacity="1"
          stroke="none"
          strokeWidth="0px"
        />
      </g>
    </svg>
  );
};

export default TranslateXIcon;
