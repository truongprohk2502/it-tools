import { SVGProps } from "react";

const MobxIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      {...props}
    >
      <polygon points="22 5 20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5" />
      <polygon points="10 2 8.485 6.374 8 8 7.535 6.374 6 2 4 2 4 15 6 15 6 7.374 5.841 5.378 6.421 7.374 8 12 9.579 7.374 10.159 5.374 10 7.374 10 15 12 15 12 2 10 2" />
      <circle cx="9" cy="27" r="1" />
      <rect x="2" y="18" width="4" height="2" />
      <rect x="8" y="18" width="4" height="2" />
      <rect x="14" y="18" width="4" height="2" />
      <rect x="20" y="18" width="4" height="2" />
      <rect x="26" y="18" width="4" height="2" />
      <path
        d="M26,31H6a2.0021,2.0021,0,0,1-2-2V25a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,31ZM6,25v4H26V25Z"
        transform="translate(0 0)"
      />
      <rect fill="none" width="32" height="32" />
    </svg>
  );
};

export default MobxIcon;
