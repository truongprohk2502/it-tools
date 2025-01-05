import { SVGProps } from "react";

const ButtonIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 100 100"
      version="1.1"
      {...props}
    >
      <path
        fill="#666"
        stroke="#222"
        strokeWidth={3}
        d="M 2,11 C 2,11 2,2 12,2 l 75,0 c 0,0 11,0 11,11 l 0,75 c 0,0 0,10 -11,10 L 12,98 C 12,98 2,99 2,88 z"
      />
      <path
        fill="#999"
        stroke="#ccc"
        strokeWidth={3}
        d="m 6.2,15 c 0,0 0,-9 8.8,-9 l 64,0 c 0,0 11,0 11,11 l 0,63 c 0,0 1,10 -9,10 l -66,0 c 0,0 -8.8,1 -8.8,-10 z"
      />

      <path
        fill="#B0CAD7"
        stroke="#222"
        strokeWidth={2.5}
        d="m 78,17 -24,0 0,30 9,0 c 6,0 13,-7 15,-30 z"
      />
      <path
        fill="#C9DFE8"
        stroke="#222"
        strokeWidth={2.5}
        d="m 78,17 0,39 c 0,0 0,8 -6,8 -14,0 -32,0 -32,0 L 40,78 16,51 40,25 40,40 c 0,0 23,0 23,0 11,0 15,-20 15,-23 z"
      />
    </svg>
  );
};

export default ButtonIcon;
