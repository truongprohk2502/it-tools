import { SVGProps } from "react";

const Puzzle2048Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 1920 1920"
      {...props}
    >
      <path
        d="M1800 1320v420c0 33-27 60-60 60h-420v-480h480Zm-600 0v480H720v-480h480Zm-600 0v480H180c-33 0-60-27-60-60v-420h480Zm1200-600v480h-480V720h480Zm-600 0v480H720V720h480Zm-600 0v480H120V720h480Zm1140-600c33 0 60 27 60 60v420h-480V120h420Zm-540 0v480H720V120h480Zm-600 0v480H120V180c0-33 27-60 60-60h420ZM1740 0H180C80.76 0 0 80.76 0 180v1560c0 99.24 80.76 180 180 180h1560c99.24 0 180-80.76 180-180V180c0-99.24-80.76-180-180-180Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Puzzle2048Icon;
