import { SVGProps } from "react";

const TextColorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 1920 1920"
      {...props}
    >
      <path
        d="M1846.308 1476.923V1920H74v-443.077h1772.308Zm-147.693 147.692H221.692v147.693h1476.923v-147.693ZM1109.751.06l509.391 1227.028-136.468 56.566-164.972-397.588H602.576l-164.972 397.588-136.468-56.566L810.526.059h299.225Zm-98.658 147.692h-101.76L663.868 738.373h592.542L1011.093 147.75Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default TextColorIcon;
