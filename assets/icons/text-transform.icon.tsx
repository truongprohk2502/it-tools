import { SVGProps } from "react";

const TextTransformIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M12 3V12M9 12H15M20 6V3H4V6M4 18H20M4 18L7 21M4 18L7 15M20 18L17 21M20 18L17 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TextTransformIcon;
