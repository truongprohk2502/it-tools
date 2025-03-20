import { SVGProps } from "react";

const FontSizeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="800px"
      width="800px"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          fill="currentColor"
          d="M452.349,174.924c-2.95-11.607-13.402-19.726-25.377-19.726h-34.875c-11.326,0-21.369,7.27-24.892,18.034   l-45.107,137.825l21.184,83.224l19.365-59.17h72.836l18.873,74.142H512L452.349,174.924z M373.354,302.417l27.032-82.607h5.751   l21.028,82.607H373.354z"
        />
        <path
          fill="currentColor"
          d="M205.804,65.185h-52.385c-17.012,0-32.097,10.933-37.392,27.108L0,446.815h72.74l36.447-111.374h109.41   l28.35,111.374h86.578L243.929,94.818C239.492,77.385,223.794,65.185,205.804,65.185z M125.257,286.338l40.61-124.094h8.641   l31.588,124.094H125.257z"
        />
      </g>
    </svg>
  );
};

export default FontSizeIcon;
