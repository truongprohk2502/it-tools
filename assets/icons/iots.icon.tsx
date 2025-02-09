import { SVGProps } from "react";

const IotsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M2,2.887H7.075V7.51H2Zm.052,6.83H7.04V28.626H2.052Z" />
      <path d="M13.271,26.454a9.791,9.791,0,0,1-2.616-7.178,10.148,10.148,0,0,1,2.616-7.343,9.321,9.321,0,0,1,7.047-2.72,9.34,9.34,0,0,1,7.075,2.72A10.168,10.168,0,0,1,30,19.276a9.809,9.809,0,0,1-2.607,7.178,9.456,9.456,0,0,1-7.075,2.659A9.436,9.436,0,0,1,13.271,26.454Zm10.436-2.972a6.7,6.7,0,0,0,1.166-4.258,6.943,6.943,0,0,0-1.166-4.354,4.047,4.047,0,0,0-3.389-1.486,4.022,4.022,0,0,0-3.38,1.486,6.991,6.991,0,0,0-1.156,4.354,6.744,6.744,0,0,0,1.156,4.258,4.053,4.053,0,0,0,3.38,1.46A4.078,4.078,0,0,0,23.707,23.482Z" />
    </svg>
  );
};

export default IotsIcon;
