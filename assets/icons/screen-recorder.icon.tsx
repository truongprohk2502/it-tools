import { SVGProps } from "react";

const ScreenRecorderIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      version="1.1"
      width="800px"
      height="800px"
      viewBox="0 0 46 46"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <g>
          <g>
            <path d="M0,3.281v23v3.875v2.375h46v-2.375v-3.875v-23H0z M23,31.188c-0.982,0-1.781-0.799-1.781-1.781s0.799-1.779,1.781-1.779     c0.982,0,1.779,0.797,1.779,1.779S23.982,31.188,23,31.188z M44,26.281H2v-21h42V26.281z" />
            <polygon points="28.838,34.594 17.838,34.594 17.838,39.844 12.338,39.844 12.338,42.719 34.713,42.719 34.713,39.844      28.838,39.844    " />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ScreenRecorderIcon;
