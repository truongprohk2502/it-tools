import { forwardRef } from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  qrColor?: string;
  children?: React.ReactNode;
}

const QrFrame8 = forwardRef<SVGSVGElement, Props>(
  ({ children, qrColor, ...props }, ref) => (
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
      <style type="text/css">
        {`\n\t.st0{fill:${qrColor || "#020203"}!important;}\n\t.st1{fill:#FFFFFF;}\n`}
      </style>
      {children}
      <path
        className="st0"
        d="M429.2,140.7H271.7c-45.7,0-82.8,37.1-82.8,82.8v157.3c0,45.7,37.1,82.8,82.8,82.8h70.6c2.3,0,4.1,1.8,4.1,4.1  v81.8c0,6.5,7.2,10.5,12.7,7.1l84.1-52.1C486,478,512,431.3,512,380.9V223.5C512,177.8,474.9,140.7,429.2,140.7z M503.9,380.7  c0,47.5-24.6,91.7-65,116.7l-84.1,52.1c-0.1,0-0.1,0-0.1,0h-0.1c-0.1,0-0.1,0-0.1,0v-81.9c0-6.7-5.4-12.2-12.2-12.2h-70.6  c-41.3,0-74.7-33.4-74.7-74.6V223.4c0-41.2,33.5-74.6,74.7-74.6v-0.1h157.5c41.3,0,74.7,33.4,74.7,74.6V380.7z"
      />
    </svg>
  ),
);

QrFrame8.displayName = "QrFrame8";

export default QrFrame8;
