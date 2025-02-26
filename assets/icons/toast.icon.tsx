import { SVGProps } from "react";

const ToastIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="currentColor">
        <g>
          <rect width="48" height="48" fill="none" />
        </g>
        <g>
          <path d="M43.4,29.4l-3.2-3.2A4.5,4.5,0,0,1,39,23.3V17C39,8.9,33.6,2,24,2S9,8.7,9,17v7a2.6,2.6,0,0,1-.7,1.7L4.6,29.4A2,2,0,0,0,4,30.8V38a2,2,0,0,0,2,2H17.1a7,7,0,0,0,13.8,0H42a2,2,0,0,0,2-2V30.8A2,2,0,0,0,43.4,29.4ZM40,36H8V31.7l3.1-3.2A6.4,6.4,0,0,0,13,24V17c0-5.3,2.9-11,11-11s11,5.9,11,11v6.3A8.6,8.6,0,0,0,37.3,29L40,31.7Z" />
          <path d="M24,25a2,2,0,0,0,2-2V13a2,2,0,0,0-4,0V23A2,2,0,0,0,24,25Z" />
          <circle cx="24" cy="29" r="2" />
        </g>
      </g>
    </svg>
  );
};

export default ToastIcon;
