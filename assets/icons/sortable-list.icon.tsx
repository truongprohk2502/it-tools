import { SVGProps } from "react";

const SortableListIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M5 8L5 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5.20801 2.31202L8.17083 6.75624C8.52526 7.28788 8.14414 8 7.50519 8L2.49481 8C1.85586 8 1.47474 7.28788 1.82917 6.75624L4.79199 2.31202C4.89094 2.16359 5.10906 2.16359 5.20801 2.31202Z"
        fill="currentColor"
      />
      <path
        d="M5.20801 21.688L8.17083 17.2438C8.52526 16.7121 8.14414 16 7.50519 16L2.49481 16C1.85586 16 1.47474 16.7121 1.82917 17.2438L4.79199 21.688C4.89094 21.8364 5.10906 21.8364 5.20801 21.688Z"
        fill="currentColor"
      />
      <path
        d="M11 7H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 17H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SortableListIcon;
