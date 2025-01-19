import { SVGProps } from "react";

const DropdownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 15h12v1H10zm-4-3h2v-2H6zm4-1h12v-1H10zm-4 6h2v-2H6zm4 4h12v-1H10zm-4 1h2v-2H6zM23 3v3a1.001 1.001 0 0 1-1 1H2a1.001 1.001 0 0 1-1-1V3a1.001 1.001 0 0 1 1-1h20a1.001 1.001 0 0 1 1 1zm-.999 3H22V3H2v3h20.001z"
      />
    </svg>
  );
};

export default DropdownIcon;
