import { SVGProps } from "react";

const TreeViewIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <rect
        x="10"
        y="26"
        width="6"
        height="6"
        rx="1"
        ry="1"
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path
        d="M15,16H11a1,1,0,0,0-1,1v1.2H5.8V12H7a1,1,0,0,0,1-1V7A1,1,0,0,0,7,6H3A1,1,0,0,0,2,7v4a1,1,0,0,0,1,1H4.2V29.8H11a.8.8,0,1,0,0-1.6H5.8V19.8H10V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17A1,1,0,0,0,15,16Z"
        className="clr-i-solid clr-i-solid-path-2"
      />
      <path
        d="M33,8H10v2H33a1,1,0,0,0,0-2Z"
        className="clr-i-solid clr-i-solid-path-3"
      />
      <path
        d="M33,18H18v2H33a1,1,0,0,0,0-2Z"
        className="clr-i-solid clr-i-solid-path-4"
      />
      <path
        d="M33,28H18v2H33a1,1,0,0,0,0-2Z"
        className="clr-i-solid clr-i-solid-path-5"
      />
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
  );
};

export default TreeViewIcon;
