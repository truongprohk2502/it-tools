import { SVGProps } from "react";

const MobileMockupIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 -8 72 72"
      {...props}
    >
      <path d="M49.75,0H22.25a4,4,0,0,0-4.16,3.78V52.22A4,4,0,0,0,22.25,56h27.5a4,4,0,0,0,4.16-3.78V3.78A4,4,0,0,0,49.75,0ZM31.6,2.73h8.8a.48.48,0,0,1,.5.46.47.47,0,0,1-.5.45H31.6a.47.47,0,0,1-.5-.45A.48.48,0,0,1,31.6,2.73ZM36,54.11a1.9,1.9,0,1,1,2.08-1.89A2,2,0,0,1,36,54.11ZM51,49H21V6H51Z" />
    </svg>
  );
};

export default MobileMockupIcon;
