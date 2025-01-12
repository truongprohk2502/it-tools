import { forwardRef } from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  bgColor?: string;
  fgColor?: string;
  children?: React.ReactNode;
}

const QrFrame7 = forwardRef<SVGSVGElement, Props>(
  ({ children, bgColor, fgColor, ...props }, ref) => {
    const fill0 = fgColor || "#020203";
    const fill1 = bgColor || "#ffffff";

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 700 700"
        xmlSpace="preserve"
        {...props}
      >
        <g>
          <rect fill={fill1} height="327" width="323" x="189" y="187" />
          {children}
          <path fill={fill0} d="M272.3,503.1v10h-83.1v-83.9h10v73.9H272.3z" />
          <path
            fill={fill0}
            d="M511.7,429.2v83.9h-83.1v-10h73.1v-73.9H511.7z"
          />
          <path fill={fill0} d="M511.7,187.7v83.8h-10v-73.8h-73.1v-10H511.7z" />
          <path fill={fill0} d="M272.3,187.7v10h-73.1v73.8h-10v-83.8H272.3z" />
        </g>
      </svg>
    );
  },
);

QrFrame7.displayName = "QrFrame7";

export default QrFrame7;
