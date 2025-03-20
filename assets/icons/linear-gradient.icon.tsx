import { SVGProps } from "react";

const LinearGradientIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      height="800px"
      width="800px"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <g>
          <path d="M0,100.174v178.087h512V100.174H0z M405.658,239.924v-34.011H55.652v-33.391h350.005v-34.016l50.69,50.716    L405.658,239.924z" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="44.522,300.522 0,345.043 0,411.826 89.044,411.826 89.044,345.043   " />
        </g>
      </g>
      <g>
        <g>
          <polygon points="467.478,300.522 422.957,345.043 422.957,411.826 512,411.826 512,345.043   " />
        </g>
      </g>
    </svg>
  );
};

export default LinearGradientIcon;
