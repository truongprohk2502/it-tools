import { SVGProps } from "react";

const SpinnerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="800px"
      width="800px"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M3.96687,7.14286H3.20525A4.885,4.885,0,0,1,7.14286,3.20232V3.974A4.123,4.123,0,0,0,3.96687,7.14286ZM8,2V3.875A4.125,4.125,0,1,1,3.875,8H2A6,6,0,1,0,8,2Z" />
    </svg>
  );
};

export default SpinnerIcon;
