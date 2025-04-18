import { SVGProps } from "react";

const DialogIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      version="1.1"
      {...props}
    >
      <path fill="currentColor" d="M3 6h2v1h-2v-1z" />
      <path fill="currentColor" d="M6 6h7v1h-7v-1z" />
      <path fill="currentColor" d="M3 8h2v1h-2v-1z" />
      <path fill="currentColor" d="M6 8h7v1h-7v-1z" />
      <path fill="currentColor" d="M3 10h2v1h-2v-1z" />
      <path fill="currentColor" d="M6 10h7v1h-7v-1z" />
      <path
        fill="currentColor"
        d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"
      />
    </svg>
  );
};

export default DialogIcon;
