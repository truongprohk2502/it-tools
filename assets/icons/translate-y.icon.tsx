import { SVGProps } from "react";

const TranslateYIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
          d="M 9.5 0 L 7 2.5 L 7 4 L 9 2 L 9 6 L 10 6 L 10 2 L 12 4 L 12 2.5 L 9.5 0 z M 3 7 L 3 20 L 16 20 L 16 7 L 3 7 z M 4 8 L 15 8 L 15 19 L 4 19 L 4 8 z "
          fill="currentColor"
          fillOpacity="1"
          stroke="none"
          strokeWidth="0px"
        />
      </g>
    </svg>
  );
};

export default TranslateYIcon;
