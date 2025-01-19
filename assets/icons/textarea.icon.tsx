import { SVGProps } from "react";

const TextareaIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      version="1.1"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <polygon points="16,33 14,33 14,10 14,6 14,3 16,3 16,0 8,0 8,3 10,3 10,6 10,10 10,33 8,33 8,36 16,36  " />
        <polygon points="17.031,6 17.031,10 44,10 44,44 4,44 4,10 6.938,10 6.938,6 0,6 0,48 48,48 48,6  " />
      </g>
    </svg>
  );
};

export default TextareaIcon;
