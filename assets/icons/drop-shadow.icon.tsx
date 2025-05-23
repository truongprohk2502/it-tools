import { SVGProps } from "react";

const DropShadowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M16.5885 7.41L6.30849 17.69C5.82849 18.17 5.00849 18.06 4.71849 17.45C4.19849 16.38 3.89849 15.17 3.89849 13.9C3.87849 8.38 9.47849 3.66 11.3785 2.21C11.7485 1.93 12.2485 1.93 12.6085 2.21C13.4785 2.87 15.1085 4.24 16.6385 6.04C16.9785 6.44 16.9585 7.04 16.5885 7.41Z"
        fill="currentColor"
      />
      <path
        d="M20.1 13.9103C20.1 18.3703 16.47 22.0003 12 22.0003C10.21 22.0003 8.53996 21.4203 7.18996 20.4203C6.69996 20.0603 6.65996 19.3403 7.08996 18.9103L17.16 8.84026C17.63 8.37026 18.42 8.47026 18.74 9.05026C19.56 10.5603 20.11 12.2003 20.1 13.9103Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DropShadowIcon;
