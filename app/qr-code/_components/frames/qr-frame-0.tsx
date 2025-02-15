import { forwardRef } from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  bgColor?: string;
  fgColor?: string;
  children?: React.ReactNode;
}

const QrFrame0 = forwardRef<SVGSVGElement, Props>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, bgColor, fgColor, ...props }, ref) => {
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
        <g>{children}</g>
      </svg>
    );
  },
);

QrFrame0.displayName = "QrFrame0";

export default QrFrame0;
