import { SVGProps } from "react";

const DrawerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      version="1.1"
      {...props}
    >
      <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-14.016h6.016v16h-4q-0.832 0-1.44-0.576t-0.576-1.408zM4 10.016v-4q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v4h-24zM12 28v-16h16v14.016q0 0.832-0.576 1.408t-1.408 0.576h-14.016z" />
    </svg>
  );
};

export default DrawerIcon;
