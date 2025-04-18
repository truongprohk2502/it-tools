import { SVGProps } from "react";

const ImageDiffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <path
        d="M4.5 4.5V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H13.5C14.0523 0.5 14.5 0.947715 14.5 1.5V9.5C14.5 10.0523 14.0523 10.5 13.5 10.5H10.5M4.5 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V13.5C0.5 14.0523 0.947716 14.5 1.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V10.5M4.5 4.5V7M4.5 4.5H7M10.5 10.5H8M10.5 10.5V8M8 4.5H10.5V7M4.5 8V10.5H7"
        stroke="currentColor"
      />
    </svg>
  );
};

export default ImageDiffIcon;
