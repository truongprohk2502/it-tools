import { SVGProps } from "react";

const ColorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <circle
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          cx="5.73"
          cy="13.45"
          r="0.48"
        />

        <circle
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          cx="7.65"
          cy="18.24"
          r="0.48"
        />

        <circle
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          cx="6.69"
          cy="8.65"
          r="0.48"
        />

        <circle
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          cx="10.52"
          cy="5.78"
          r="0.48"
        />

        <circle
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          cx="15.32"
          cy="6.74"
          r="0.48"
        />

        <circle
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          cx="18.2"
          cy="10.57"
          r="0.48"
        />

        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth="1.92px"
          d="M22.51,11.86a4.87,4.87,0,0,1-4.86,4.95H16.18a4.28,4.28,0,0,0-3.57,1.91l-1.15,1.72a4.74,4.74,0,0,1-4,2.12h0a4.61,4.61,0,0,1-3.87-2A13.07,13.07,0,0,1,1.41,13.3V12a10.55,10.55,0,0,1,21.1-.15Z"
        />
      </g>
    </svg>
  );
};

export default ColorIcon;
