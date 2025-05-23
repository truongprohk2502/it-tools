import { SVGProps } from "react";

const HueRotateIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,0,1-7.984-7.685A7.314,7.314,0,0,0,16,6.667a7.222,7.222,0,0,0-.207-1.708A8,8,0,0,1,12,20Z" />
    </svg>
  );
};

export default HueRotateIcon;
