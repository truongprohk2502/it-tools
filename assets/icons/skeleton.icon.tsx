import { SVGProps } from "react";

const SkeletonIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      version="1.1"
      width="800px"
      height="800px"
      viewBox="0 0 256 241"
      enableBackground="new 0 0 256 241"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M159.659,67.066l4.248-6.738l-10.052-6.337  l-4.175,6.621c-4.802-2.345-10.036-3.935-15.548-4.618v-6.321h7.313V37.79h-26.051v11.883h6.855v6.277  c-24.644,2.859-43.838,23.855-43.838,49.252c0,27.343,22.245,49.588,49.588,49.588s49.588-22.245,49.588-49.588  C177.588,89.885,170.606,76.169,159.659,67.066z M128,142.916c-20.795,0-37.714-16.918-37.714-37.714S107.205,67.488,128,67.488  s37.714,16.918,37.714,37.714S148.795,142.916,128,142.916z M158.813,104.974h-30.621V74.353  C145.068,74.433,158.631,88.121,158.813,104.974z" />
    </svg>
  );
};

export default SkeletonIcon;
