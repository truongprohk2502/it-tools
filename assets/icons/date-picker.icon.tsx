import { SVGProps } from "react";

const DatePickerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M76,42H24c-1.1,0-2,0.9-2,2v30c0,3.3,2.7,6,6,6h44c3.3,0,6-2.7,6-6V44C78,42.9,77.1,42,76,42z M40,70  c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V70z M54,70c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-4  c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V70z M54,56c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V56z   M68,56c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V56z M72,26h-5v-2c0-2.2-1.8-4-4-4s-4,1.8-4,4v2  H41v-2c0-2.2-1.8-4-4-4s-4,1.8-4,4v2h-5c-3.3,0-6,2.7-6,6v2c0,1.1,0.9,2,2,2h52c1.1,0,2-0.9,2-2v-2C78,28.7,75.3,26,72,26z" />
    </svg>
  );
};

export default DatePickerIcon;
