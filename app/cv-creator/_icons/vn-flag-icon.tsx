import { SVGProps } from "react";

const VietnamFlagIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 36 36"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fill="#DA251D"
        d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
      />
      <path
        fill="#FF0"
        d="M19.753 16.037L18 10.642l-1.753 5.395h-5.672l4.589 3.333l-1.753 5.395L18 21.431l4.589 3.334l-1.753-5.395l4.589-3.333z"
      />
    </svg>
  );
};

export default VietnamFlagIcon;
