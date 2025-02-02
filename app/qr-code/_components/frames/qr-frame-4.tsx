import { forwardRef } from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  bgColor?: string;
  fgColor?: string;
  children?: React.ReactNode;
}

const QrFrame4 = forwardRef<SVGSVGElement, Props>(
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
        <path fill={fill0} d="M310.3,533.8h9.7l-4.9-14.8L310.3,533.8z" />
        <path
          fill={fill0}
          d="M521,376.6V148.4c0-20.3-16.4-36.7-36.7-36.7H217.1c-20.3,0-36.7,16.4-36.7,36.7V375l-18,27.8v153.6 c0,18,14.6,32.6,32.6,32.6h310.9c18,0,32.6-14.6,32.6-32.6V402.8L521,376.6z M230.3,521.7c0.3,0.5,0.8,1,1.5,1.4 c0.6,0.5,1.4,0.9,2.4,1.3c0.9,0.4,2,0.8,3.2,1.2c2.1,0.6,3.9,1.3,5.4,2.1c1.6,0.8,2.9,1.6,3.9,2.6c1.1,1,1.8,2.1,2.4,3.3 c0.5,1.2,0.8,2.6,0.8,4.2c0,1.6-0.3,3.1-1,4.4c-0.6,1.3-1.6,2.4-2.8,3.3s-2.7,1.6-4.3,2c-1.7,0.5-3.5,0.7-5.6,0.7 c-1.9,0-3.7-0.2-5.5-0.7s-3.5-1.3-4.9-2.3c-1.5-1-2.6-2.3-3.5-3.8c-0.9-1.6-1.3-3.4-1.3-5.5h7.8c0,1.2,0.2,2.2,0.5,3 c0.4,0.8,0.9,1.5,1.5,2c0.7,0.5,1.5,0.9,2.4,1.1c0.9,0.2,2,0.3,3.1,0.3c1.3,0,2.5-0.2,3.3-0.6c0.9-0.4,1.5-0.9,1.9-1.6 c0.6-0.6,0.8-1.3,0.8-2.2c0-0.7-0.1-1.3-0.3-1.8c-0.2-0.5-0.6-1-1.1-1.5s-1.3-0.9-2.3-1.4c-1-0.4-2.2-0.9-3.8-1.4 c-1.7-0.6-3.3-1.2-4.9-1.9c-1.5-0.7-2.9-1.5-4-2.4c-1.2-0.9-2.1-2-2.7-3.2c-0.7-1.2-1-2.7-1-4.3s0.3-3,1-4.3 c0.7-1.3,1.7-2.4,2.9-3.3c1.2-0.9,2.7-1.6,4.4-2.1c1.7-0.5,3.6-0.8,5.6-0.8c2.8,0,5.2,0.5,7.3,1.5c2.1,1,3.7,2.4,4.8,4.1 c1.2,1.8,1.7,3.7,1.7,6h-7.7c0-1.1-0.2-2.1-0.7-2.9c-0.4-0.9-1.1-1.5-2.1-2c-0.9-0.5-2.1-0.7-3.5-0.7c-1.3,0-2.5,0.2-3.4,0.6 c-0.9,0.4-1.6,0.9-2,1.6c-0.4,0.7-0.7,1.4-0.7,2.3C229.8,520.6,230,521.2,230.3,521.7z M288.2,542.1c-1.2,2-2.9,3.5-5.2,4.6 c-2.2,1.1-4.8,1.7-7.9,1.7c-2.4,0-4.6-0.4-6.5-1.2c-1.9-0.9-3.6-2.1-4.9-3.6c-1.3-1.6-2.4-3.5-3.1-5.7c-0.7-2.2-1.1-4.7-1.1-7.5 v-2.6c0-2.8,0.4-5.3,1.1-7.5c0.7-2.3,1.8-4.2,3.2-5.7c1.4-1.6,3-2.8,4.9-3.6c1.9-0.9,4.1-1.3,6.4-1.3c3.1,0,5.8,0.6,7.9,1.7 c2.2,1.1,3.9,2.7,5.1,4.7s1.9,4.3,2.2,6.8h-7.8c-0.1-1.5-0.4-2.8-0.9-3.9s-1.3-1.9-2.4-2.4c-1-0.5-2.4-0.8-4.1-0.8 c-1.3,0-2.4,0.2-3.4,0.7s-1.8,1.2-2.4,2.2c-0.6,1-1.1,2.2-1.5,3.7c-0.3,1.5-0.5,3.2-0.5,5.2v2.7c0,2,0.1,3.7,0.4,5.2 s0.7,2.7,1.3,3.7c0.6,1,1.4,1.8,2.4,2.3s2.2,0.8,3.5,0.8c1.6,0,3-0.3,4-0.8c1.1-0.5,1.9-1.3,2.4-2.3c0.8-1.1,1.1-2.4,1.3-3.9h7.7 C290.1,537.8,289.4,540.1,288.2,542.1z M324.6,547.8l-2.6-7.9h-13.7l-2.6,7.9h-8.3l14-37.7h5.3h2.1l14.1,37.7H324.6z M372.3,547.8 h-7.8l-15.1-25.3v25.3h-7.8v-37.7h7.8l15.2,25.3v-25.3h7.7V547.8z M442.6,547.8h-7.8v-10.7l0.8-17.2l-10.1,27.9h-5.3l-10.3-28.3 l0.8,17.6v10.7H403v-37.7h3.5h3h3.6l9.7,27.7l9.7-27.7h3.5h3.1h3.5V547.8z M480,547.8h-17.6h-7.8v-37.7h5.3h2.5h17.5v6.1h-17.5v9.2 h15v5.9h-15v10.4H480V547.8z M512.9,404.2l-162.8,75.5l-161.6-75V148.5c0-15.8,12.8-28.6,28.6-28.6h267.2 c15.8,0,28.6,12.8,28.6,28.6V404.2z"
        />
        <path
          fill={fill1}
          d="M480,541.6h-17.6v-10.4h15v-5.9h-15v-9.2h17.5V510h-17.5h-2.5h-5.3v37.7h7.8H480V541.6z"
        />
        <path
          fill={fill1}
          d="M436,510h-3.5l-9.7,27.7l-9.7-27.7h-3.6h-3H403v37.7h7.7V537l-0.8-17.6l10.3,28.3h5.3l10.1-27.9l-0.8,17.2v10.7 h7.8V510h-3.5H436z"
        />
        <path
          fill={fill1}
          d="M364.6,535.3L349.4,510h-7.8v37.7h7.8v-25.3l15.1,25.3h7.8V510h-7.7V535.3z"
        />
        <path
          fill={fill1}
          d="M316.7,510h-5.3l-14,37.7h8.3l2.6-7.9H322l2.6,7.9h8.3L318.8,510H316.7z M310.3,533.7l4.8-14.7l4.8,14.7H310.3z "
        />
        <path
          fill={fill1}
          d="M281.3,539.1c-0.5,1-1.3,1.8-2.4,2.3c-1,0.5-2.4,0.8-4,0.8c-1.3,0-2.5-0.3-3.5-0.8s-1.8-1.3-2.4-2.3 c-0.6-1-1-2.2-1.3-3.7s-0.4-3.2-0.4-5.2v-2.7c0-2,0.2-3.7,0.5-5.2c0.4-1.5,0.9-2.7,1.5-3.7c0.6-1,1.4-1.7,2.4-2.2s2.1-0.7,3.4-0.7 c1.7,0,3.1,0.3,4.1,0.8c1.1,0.5,1.9,1.3,2.4,2.4c0.5,1.1,0.8,2.4,0.9,3.9h7.8c-0.3-2.5-1-4.8-2.2-6.8s-2.9-3.6-5.1-4.7 c-2.1-1.1-4.8-1.7-7.9-1.7c-2.3,0-4.5,0.4-6.4,1.3c-1.9,0.8-3.5,2-4.9,3.6c-1.4,1.5-2.5,3.4-3.2,5.7c-0.7,2.2-1.1,4.7-1.1,7.5v2.6 c0,2.8,0.4,5.3,1.1,7.5c0.7,2.2,1.8,4.1,3.1,5.7c1.3,1.5,3,2.7,4.9,3.6c1.9,0.8,4.1,1.2,6.5,1.2c3.1,0,5.7-0.6,7.9-1.7 c2.3-1.1,4-2.6,5.2-4.6s1.9-4.3,2.1-6.8h-7.7C282.4,536.7,282.1,538,281.3,539.1z"
        />
        <path
          fill={fill1}
          d="M232.5,516c0.9-0.4,2.1-0.6,3.4-0.6c1.4,0,2.6,0.2,3.5,0.7c1,0.5,1.7,1.1,2.1,2c0.5,0.8,0.7,1.8,0.7,2.9h7.7 c0-2.3-0.5-4.2-1.7-6c-1.1-1.7-2.7-3.1-4.8-4.1s-4.5-1.5-7.3-1.5c-2,0-3.9,0.3-5.6,0.8c-1.7,0.5-3.2,1.2-4.4,2.1 c-1.2,0.9-2.2,2-2.9,3.3s-1,2.7-1,4.3c0,1.6,0.3,3.1,1,4.3c0.6,1.2,1.5,2.3,2.7,3.2c1.1,0.9,2.5,1.7,4,2.4c1.6,0.7,3.2,1.3,4.9,1.9 c1.6,0.5,2.8,1,3.8,1.4c1,0.5,1.8,0.9,2.3,1.4s0.9,1,1.1,1.5c0.2,0.5,0.3,1.1,0.3,1.8c0,0.9-0.2,1.6-0.8,2.2c-0.4,0.7-1,1.2-1.9,1.6 c-0.8,0.4-2,0.6-3.3,0.6c-1.1,0-2.2-0.1-3.1-0.3c-0.9-0.2-1.7-0.6-2.4-1.1c-0.6-0.5-1.1-1.2-1.5-2c-0.3-0.8-0.5-1.8-0.5-3H221 c0,2.1,0.4,3.9,1.3,5.5c0.9,1.5,2,2.8,3.5,3.8c1.4,1,3.1,1.8,4.9,2.3s3.6,0.7,5.5,0.7c2.1,0,3.9-0.2,5.6-0.7c1.6-0.4,3.1-1.1,4.3-2 c1.2-0.9,2.2-2,2.8-3.3c0.7-1.3,1-2.8,1-4.4s-0.3-3-0.8-4.2c-0.6-1.2-1.3-2.3-2.4-3.3c-1-1-2.3-1.8-3.9-2.6 c-1.5-0.8-3.3-1.5-5.4-2.1c-1.2-0.4-2.3-0.8-3.2-1.2c-1-0.4-1.8-0.8-2.4-1.3c-0.7-0.4-1.2-0.9-1.5-1.4c-0.3-0.5-0.5-1.1-0.5-1.7 c0-0.9,0.3-1.6,0.7-2.3C230.9,516.9,231.6,516.4,232.5,516z"
        />
        <path
          d="m187.19,404.28l163,75.62l163,-75.62z"
          fill={fill1}
          transform="matrix(1 0 0 1 0 0)"
        />
        <rect fill={fill1} height="254" width="325" x="188" y="151" />
        <rect
          fill={fill1}
          height="103"
          rx="28"
          ry="28"
          width="325"
          x="187.73"
          y="119.09"
        />
        {children}
      </svg>
    );
  },
);

QrFrame4.displayName = "QrFrame4";

export default QrFrame4;
