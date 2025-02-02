import { SVGProps } from "react";

const StepsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="800px"
      width="800px"
      version="1.1"
      viewBox="0 0 381.88 381.88"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          fill="currentColor"
          d="M345.333,41.338H36.547H0v11.934h36.547v216.299h139.989l-62.533,62.533l8.437,8.437l62.533-62.533   v61.674h11.934v-61.674l60.856,60.856l8.437-8.437l-60.856-60.856h139.989V53.272h36.547V41.338H345.333z M264.863,162.424   l-58.726-16.009l-34.924,50.73l-63.273-33.468l-28.689,62.151l-10.836-5l33.963-73.589l65.015,34.399l33.695-48.964l58.004,15.812   l42.269-73.566l10.347,5.943L264.863,162.424z"
        />
      </g>
    </svg>
  );
};

export default StepsIcon;
