import { SVGProps } from "react";

const TableIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M15 21H9V10h6v11zm2 0V10h5v10a1 1 0 0 1-1 1h-4zM7 21H3a1 1 0 0 1-1-1V10h5v11zM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4z"
        />
      </g>
    </svg>
  );
};

export default TableIcon;
