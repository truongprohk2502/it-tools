import { SVGProps } from "react";

const BoxBorderIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M20 4H4L4 20M20 8H20.01M20 20H20.01M16 20H16.01M12 20H12.01M8 20H8.01M20 16H20.01M20 12H20.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BoxBorderIcon;
