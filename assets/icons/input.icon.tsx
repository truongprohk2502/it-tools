import { SVGProps } from "react";

const InputIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      height="800px"
      width="800px"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M29,11H15V9h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v2H3c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10v2  h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1v-2h14c0.6,0,1-0.4,1-1V12C30,11.4,29.6,11,29,11z M10,16H9v3  c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S10.6,16,10,16z M15,21c0,0.5-0.5,1-1,1s-1-0.5-1-1  v-8c0-0.5,0.5-1,1-1s1,0.5,1,1V21z" />
    </svg>
  );
};

export default InputIcon;
