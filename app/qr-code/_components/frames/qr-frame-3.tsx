import { forwardRef } from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  bgColor?: string;
  fgColor?: string;
  children?: React.ReactNode;
}

const QrFrame3 = forwardRef<SVGSVGElement, Props>(
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
          <path
            fill={fill0}
            d="M466.7,134.4H234.2c-22.1,0-40,17.9-40,40v232.5c0,22.1,17.9,40,40,40h232.5c22.1,0,40-17.9,40-40V174.4   C506.7,152.3,488.8,134.4,466.7,134.4z M492.5,407.2c0,14-11.4,25.4-25.4,25.4H234c-14,0-25.4-11.4-25.4-25.4V174.1   c0-14,11.4-25.4,25.4-25.4h233.1c14,0,25.4,11.4,25.4,25.4V407.2z"
          />
          <path fill={fill0} d="M306.3,526.8h12.8l-6.4-17.6L306.3,526.8z" />
          <path
            fill={fill0}
            d="M466.7,473h-38.1H392c-1.6,0-3.2-0.4-4.6-1.1L355.1,455c-2.9-1.5-6.4-1.5-9.3,0l-32.3,16.9   c-1.4,0.8-3,1.1-4.6,1.1h-36.6h-38.1c-22.1,0-40,17.9-40,40v13.4c0,22.1,17.9,40,40,40h232.5c22.1,0,40-17.9,40-40V513   C506.7,490.9,488.8,473,466.7,473z M257.9,535.3c-0.6,1.2-1.5,2.3-2.7,3.2s-2.5,1.6-4.2,2c-1.6,0.5-3.4,0.7-5.4,0.7   c-1.7,0-3.5-0.2-5.2-0.7s-3.2-1.2-4.6-2.2c-1.4-1-2.5-2.2-3.3-3.6c-0.8-1.4-1.2-3.1-1.2-5h5c0,1.3,0.3,2.4,0.8,3.3s1.2,1.7,2,2.3   c0.9,0.6,1.9,1.1,3,1.4c1.1,0.3,2.3,0.4,3.5,0.4c1.7,0,3.2-0.2,4.4-0.7s2.1-1.2,2.7-2.1s1-2,1-3.2c0-0.9-0.1-1.7-0.4-2.3   c-0.3-0.7-0.7-1.3-1.4-1.9s-1.6-1.1-2.7-1.6c-1.2-0.5-2.6-1-4.4-1.5c-1.9-0.5-3.5-1.2-5-1.8c-1.5-0.7-2.8-1.5-3.9-2.4   c-1.1-0.9-1.9-1.9-2.5-3c-0.6-1.1-0.9-2.4-0.9-3.9c0-1.5,0.3-2.8,0.9-4.1c0.6-1.3,1.5-2.3,2.6-3.2s2.5-1.7,4.1-2.2   c1.6-0.5,3.3-0.8,5.3-0.8c2.8,0,5.2,0.5,7.2,1.6s3.5,2.5,4.5,4.2c1,1.7,1.6,3.6,1.6,5.5h-5c0-1.4-0.3-2.7-0.9-3.8   c-0.6-1.1-1.5-2-2.7-2.6c-1.2-0.6-2.8-1-4.7-1c-1.8,0-3.2,0.3-4.4,0.8s-2,1.3-2.6,2.2c-0.6,0.9-0.8,2-0.8,3.1   c0,0.8,0.2,1.5,0.5,2.2c0.3,0.6,0.9,1.2,1.6,1.8s1.6,1.1,2.7,1.5c1.1,0.5,2.5,0.9,4,1.3c2.1,0.6,4,1.3,5.5,2   c1.6,0.7,2.8,1.6,3.8,2.5c1,0.9,1.8,2,2.3,3.1c0.5,1.2,0.8,2.5,0.8,3.9C258.8,532.7,258.5,534.1,257.9,535.3z M269.4,529   c0.4,1.6,1,3,1.8,4.3c0.8,1.2,1.8,2.2,3,2.9c1.2,0.7,2.7,1,4.4,1c2.1,0,3.8-0.3,5.1-1c1.3-0.7,2.2-1.6,2.8-2.9   c0.7-1.3,1.1-2.8,1.4-4.5h5c-0.3,2.4-0.9,4.5-2,6.4c-1.1,1.9-2.7,3.4-4.7,4.5c-2,1.1-4.5,1.6-7.6,1.6c-2.2,0-4.2-0.4-6-1.2   c-1.8-0.8-3.3-2-4.6-3.5c-1.3-1.5-2.3-3.4-3-5.5c-0.7-2.2-1-4.6-1-7.2v-3.8c0-2.6,0.3-5,1-7.2c0.7-2.2,1.7-4,3-5.5   c1.3-1.5,2.9-2.7,4.8-3.5c1.9-0.8,4-1.2,6.3-1.2c2.8,0,5.3,0.5,7.2,1.6c2,1.1,3.5,2.6,4.6,4.5c1.1,1.9,1.8,4.1,2,6.6h-5   c-0.2-1.8-0.7-3.3-1.3-4.5c-0.7-1.3-1.6-2.3-2.8-2.9c-1.2-0.7-2.8-1-4.7-1c-1.7,0-3.2,0.3-4.4,1c-1.3,0.6-2.3,1.5-3.2,2.7   c-0.8,1.2-1.5,2.6-1.9,4.2s-0.6,3.5-0.6,5.5v3.8C268.9,525.6,269.1,527.4,269.4,529z M324.1,540.8l-3.6-9.9h-15.8l-3.6,9.9H296   l14.4-37.7h1.1h2.2h1.1l14.4,37.7H324.1z M363.3,540.8h-5l-19-29.1v29.1h-5v-37.7h5l19.1,29.2v-29.2h4.9V540.8z M422.9,540.8h-5   v-14.7l0.5-15.8L406,540.8h-3.8l-12.4-30.5l0.5,15.8v14.7h-5v-37.7h1.6h2.7h2.1l12.4,30.7l12.3-30.7h2.1h2.7h1.6L422.9,540.8z    M466.8,503.1l-0.3,27.1h-4.3l-0.4-27.1H466.8z M455.6,540.8h-19h-1h-4v-37.7h4h1h18.7v4.1h-18.7v12.1h16.3v4.1h-16.3v13.4h19   V540.8z M466.5,540.3c-0.5,0.5-1.2,0.8-2.1,0.8c-0.9,0-1.6-0.3-2.1-0.8s-0.7-1.2-0.7-1.9c0-0.8,0.2-1.4,0.7-2   c0.5-0.5,1.2-0.8,2.1-0.8c0.9,0,1.6,0.3,2.1,0.8s0.8,1.2,0.8,2C467.3,539.1,467,539.7,466.5,540.3z"
          />
          <path fill={fill1} d="M466.3,530.2l0.4-27.1h-5l0.3,27.1H466.3z" />
          <path
            fill={fill1}
            d="M466.4,536.4c-0.5-0.5-1.2-0.8-2.1-0.8s-1.6,0.3-2.1,0.8s-0.7,1.2-0.7,2s0.2,1.4,0.7,1.9s1.2,0.8,2.1,0.8   s1.6-0.3,2.1-0.8s0.8-1.2,0.8-1.9C467.2,537.6,466.9,537,466.4,536.4z"
          />
          <path
            fill={fill1}
            d="M436.6,523.4h16.3v-4.1h-16.3v-12.1h18.7v-4.1h-18.7h-1.1h-3.9v37.7h3.9h1.1h18.9v-4h-18.9V523.4z"
          />
          <path
            fill={fill1}
            d="M418.5,503.1h-2.1L404,533.9l-12.3-30.8h-2.2h-2.7h-1.5v37.7h4.9v-14.7l-0.5-15.8l12.4,30.5h3.8l12.4-30.5   l-0.5,15.8v14.7h5v-37.7h-1.6H418.5z"
          />
          <path
            fill={fill1}
            d="M358.3,532.3l-19.1-29.2h-5v37.7h5v-29.1l19,29.1h5v-37.7h-4.9V532.3z"
          />
          <path
            fill={fill1}
            d="M313.7,503.1h-2.2h-1.1L296,540.8h5.1l3.6-9.9h15.8l3.6,9.9h5.1l-14.4-37.7H313.7z M306.2,526.9l6.4-17.6   l6.4,17.6H306.2z"
          />
          <path
            fill={fill1}
            d="M269.4,514.6c0.4-1.6,1.1-3.1,1.9-4.2c0.9-1.2,1.9-2.1,3.2-2.7c1.3-0.6,2.8-1,4.4-1c2,0,3.5,0.3,4.7,1   c1.2,0.7,2.1,1.7,2.8,2.9c0.7,1.3,1.1,2.8,1.3,4.5h5c-0.3-2.5-0.9-4.7-2-6.6s-2.6-3.4-4.6-4.5s-4.4-1.6-7.2-1.6   c-2.3,0-4.4,0.4-6.3,1.2c-1.9,0.8-3.5,2-4.8,3.5c-1.3,1.5-2.3,3.4-3,5.5c-0.7,2.1-1,4.5-1,7.2v3.8c0,2.6,0.3,5,1,7.2   c0.7,2.1,1.7,4,3,5.5c1.3,1.5,2.8,2.7,4.6,3.5c1.8,0.8,3.8,1.2,6,1.2c3,0,5.5-0.5,7.6-1.6c2-1.1,3.6-2.6,4.7-4.5s1.8-4,2-6.4h-5   c-0.3,1.8-0.7,3.3-1.4,4.5c-0.6,1.3-1.6,2.2-2.8,2.9c-1.3,0.7-3,1-5.1,1c-1.7,0-3.1-0.3-4.4-1c-1.2-0.7-2.2-1.7-3-2.9   c-0.8-1.2-1.4-2.6-1.8-4.3c-0.4-1.6-0.6-3.4-0.6-5.2v-3.8C268.8,518,269,516.2,269.4,514.6z"
          />
          <path
            fill={fill1}
            d="M255.7,524.2c-1-0.9-2.3-1.8-3.8-2.5c-1.6-0.7-3.4-1.4-5.5-2c-1.6-0.4-2.9-0.9-4-1.3c-1.1-0.5-2-1-2.7-1.5   s-1.2-1.1-1.6-1.8c-0.3-0.7-0.5-1.4-0.5-2.2c0-1.2,0.3-2.2,0.8-3.1c0.6-0.9,1.4-1.6,2.6-2.2c1.2-0.5,2.6-0.8,4.4-0.8   c1.9,0,3.4,0.3,4.7,1c1.2,0.6,2.1,1.5,2.7,2.6c0.6,1.1,0.9,2.3,0.9,3.8h5c0-2-0.5-3.8-1.6-5.5c-1-1.7-2.5-3.1-4.5-4.2   s-4.4-1.6-7.2-1.6c-1.9,0-3.7,0.3-5.3,0.8c-1.6,0.5-2.9,1.3-4.1,2.2c-1.1,0.9-2,2-2.6,3.2c-0.6,1.2-0.9,2.6-0.9,4.1   c0,1.5,0.3,2.8,0.9,3.9c0.6,1.1,1.4,2.1,2.5,3c1.1,0.9,2.4,1.7,3.9,2.4c1.5,0.7,3.2,1.3,5,1.8c1.8,0.5,3.2,1,4.4,1.5s2.1,1,2.7,1.6   c0.7,0.6,1.1,1.2,1.4,1.9c0.3,0.7,0.4,1.4,0.4,2.3c0,1.2-0.3,2.3-1,3.2c-0.6,0.9-1.5,1.6-2.7,2.1s-2.7,0.7-4.4,0.7   c-1.2,0-2.4-0.1-3.5-0.4c-1.1-0.3-2.1-0.7-3-1.4c-0.9-0.6-1.5-1.4-2-2.3s-0.8-2-0.8-3.3h-5c0,1.9,0.4,3.5,1.2,5   c0.8,1.4,1.9,2.6,3.3,3.6c1.4,1,2.9,1.7,4.6,2.2s3.4,0.7,5.2,0.7c2,0,3.8-0.2,5.4-0.7c1.6-0.5,3-1.2,4.2-2c1.2-0.9,2-1.9,2.7-3.2   c0.6-1.2,0.9-2.6,0.9-4.2c0-1.5-0.3-2.8-0.8-3.9C257.5,526.1,256.7,525.1,255.7,524.2z"
          />
          <path
            d="m187.19,404.28l163,75.62l163,-75.62z"
            fill={fill0}
            transform="matrix(1 0 0 1 0 0)"
          />
          <rect
            fill={fill1}
            height="285"
            rx="27"
            ry="27"
            width="285"
            x="208"
            y="148"
          />
          {children}
        </g>
      </svg>
    );
  },
);

QrFrame3.displayName = "QrFrame3";

export default QrFrame3;
