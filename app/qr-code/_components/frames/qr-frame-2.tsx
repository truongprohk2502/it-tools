import { forwardRef } from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  bgColor?: string;
  fgColor?: string;
  children?: React.ReactNode;
}

const QrFrame2 = forwardRef<SVGSVGElement, Props>(
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
        <path fill={fill0} d="M317.4,495.7h7.3l-3.7-11.1L317.4,495.7z" />
        <path
          fill={fill0}
          d="M492.8,190.9v-10.2c0-5.6-4.6-10.2-10.2-10.2H271.3c-33.3,0-60.6,25.8-63,58.5c0,0,0,0,0,0.1  c0,0.5-0.1,1-0.1,1.5c0,1-0.1,2.1-0.1,3.1v276.2c0,11.3,9.1,20.4,20.4,20.4h203.2c33.8,0,61.2-27.4,61.2-61.2V192.9  C492.9,192.2,492.9,191.5,492.8,190.9z M256,486.6c0.3,0.4,0.6,0.8,1.1,1.1c0.5,0.4,1.1,0.7,1.8,1c0.7,0.3,1.5,0.6,2.5,0.9  c1.6,0.5,3,1,4.2,1.6c1.2,0.6,2.2,1.3,3,2c0.8,0.7,1.4,1.6,1.8,2.5s0.6,2,0.6,3.2c0,1.3-0.2,2.4-0.7,3.4s-1.2,1.8-2.1,2.5  c-0.9,0.7-2,1.2-3.3,1.6c-1.3,0.4-2.7,0.5-4.3,0.5c-1.4,0-2.8-0.2-4.2-0.6c-1.4-0.4-2.7-1-3.8-1.7c-1.1-0.8-2-1.8-2.7-3  c-0.7-1.2-1-2.6-1-4.3h6c0,0.9,0.1,1.7,0.4,2.3c0.3,0.6,0.7,1.1,1.2,1.5c0.5,0.4,1.1,0.7,1.8,0.8c0.7,0.2,1.5,0.3,2.4,0.3  c1,0,1.9-0.1,2.5-0.4c0.7-0.3,1.2-0.7,1.5-1.2c0.1-0.4,0.3-1,0.3-1.7c0-0.5-0.1-1-0.2-1.4c-0.1-0.4-0.4-0.8-0.8-1.1  c-0.4-0.4-1-0.7-1.7-1.1c-0.7-0.3-1.7-0.7-2.9-1.1c-1.3-0.4-2.6-0.9-3.7-1.4c-1.2-0.5-2.2-1.1-3.1-1.9c-0.9-0.7-1.6-1.5-2.1-2.5  c-0.5-0.9-0.8-2-0.8-3.3c0-1.2,0.3-2.3,0.8-3.3s1.3-1.9,2.2-2.5c1-0.7,2.1-1.3,3.4-1.7c1.3-0.4,2.8-0.6,4.3-0.6c2.1,0,4,0.4,5.6,1.2  c1.6,0.8,2.8,1.8,3.7,3.2c0.9,1.3,1.3,2.9,1.3,4.6h-5.9c0-0.9-0.2-1.6-0.5-2.2c-0.3-0.6-0.9-1.2-1.6-1.5c-0.7-0.4-1.6-0.6-2.7-0.6  c-1,0-1.9,0.2-2.6,0.5c-0.7,0.3-1.2,0.7-1.6,1.3c-0.3,0.5-0.5,1.1-0.5,1.8C255.6,485.8,255.7,486.2,256,486.6z M300.3,502.1  c-0.9,1.5-2.3,2.7-4,3.5c-1.7,0.8-3.7,1.3-6.1,1.3c-1.9,0-3.5-0.3-5-1c-1.5-0.6-2.7-1.6-3.8-2.8c-1-1.2-1.8-2.7-2.4-4.4  c-0.6-1.7-0.8-3.6-0.8-5.8v-2c0-2.1,0.3-4,0.8-5.8c0.6-1.7,1.4-3.2,2.4-4.4c1.1-1.2,2.3-2.1,3.8-2.8c1.5-0.6,3.1-1,4.9-1  c2.4,0,4.5,0.4,6.1,1.3c1.7,0.9,3,2.1,3.9,3.6s1.5,3.3,1.7,5.3h-6c-0.1-1.2-0.3-2.1-0.7-3c-0.4-0.8-1-1.4-1.8-1.9  c-0.8-0.4-1.9-0.6-3.2-0.6c-1,0-1.9,0.2-2.6,0.6s-1.4,0.9-1.9,1.7c-0.5,0.8-0.9,1.7-1.1,2.9c-0.2,1.1-0.4,2.5-0.4,4v2  c0,1.5,0.1,2.8,0.3,4c0.2,1.1,0.6,2.1,1,2.9c0.5,0.8,1.1,1.4,1.8,1.8c0.8,0.4,1.7,0.6,2.7,0.6c1.2,0,2.3-0.2,3.1-0.6  c0.8-0.4,1.4-1,1.9-1.8c0.7-0.7,0.9-1.6,1-2.8h6C301.8,498.9,301.2,500.6,300.3,502.1z M328.2,506.4v0.1l-2-6.1h-10.4l-2,6.2h-6.4  l10.8-29h1.5v-0.2h4.1l10.8,29H328.2z M365,506.5h-6l-11.7-19.4v19.4h-6v-29h6L359,497v-19.5h6V506.5z M419,506.5h-6v-8.3l0.6-12.9  l-7.7,21.2h-4.1l-8-21.9l0.6,13.7v8.3h-6v-29.1h0.1h2.7h2.3h2.8l7.5,21.3l7.5-21.3h5.1h2.6V506.5z M447.8,482.2h-13.5v7.1h11.5v4.5  h-11.5v8.1h13.5v4.7h-15.4v-0.1h-4.1v-29h6h13.5V482.2z M488.9,398.8c0,32.7-26.5,59.2-59.2,59.2H230.6c-10.2,0-18.4-8.3-18.4-18.4  v-206c0-32.7,26.5-59.2,59.2-59.2h211.4c3.4,0,6.1,2.7,6.1,6.1V398.8z"
        />
        <path
          fill={fill1}
          d="M434.3,477.5h-6v29h4.1v0.1h15.4v-4.7h-13.5v-8.1h11.5v-4.5h-11.5v-7.1h13.5v-4.7H434.3z"
        />
        <path
          fill={fill1}
          d="M416.4,477.5h-5.1l-7.5,21.3l-7.5-21.3h-2.8h-2.3h-2.7h-0.1v29.1h6v-8.3l-0.6-13.6l8,21.8h4.1l7.7-21.1  l-0.6,12.8v8.3h6v-29H416.4z"
        />
        <path
          fill={fill1}
          d="M359,497l-11.7-19.5h-6v29h6v-19.4l11.7,19.4h6v-29h-6V497z"
        />
        <path
          fill={fill1}
          d="M319.7,477.4v0.2h-1.5l-10.8,29h6.4l2-6.2h10.4l2,6.1v-0.1h6.4l-10.8-29H319.7z M317.4,495.7l3.6-11.1l3.6,11.1  H317.4z"
        />
        <path
          fill={fill1}
          d="M294.9,499.7c-0.5,0.8-1.1,1.4-1.9,1.8c-0.8,0.4-1.9,0.6-3.1,0.6c-1,0-1.9-0.2-2.7-0.6c-0.7-0.4-1.3-1-1.8-1.8  c-0.4-0.8-0.8-1.8-1-2.9c-0.2-1.2-0.3-2.5-0.3-4v-2c0-1.5,0.2-2.9,0.4-4c0.2-1.2,0.6-2.1,1.1-2.9c0.5-0.8,1.2-1.3,1.9-1.7  s1.6-0.6,2.6-0.6c1.3,0,2.4,0.2,3.2,0.6c0.8,0.5,1.4,1.1,1.8,1.9c0.4,0.9,0.6,1.8,0.7,3h6c-0.2-2-0.8-3.8-1.7-5.3s-2.2-2.7-3.9-3.6  c-1.6-0.9-3.7-1.3-6.1-1.3c-1.8,0-3.4,0.4-4.9,1c-1.5,0.7-2.7,1.6-3.8,2.8c-1,1.2-1.8,2.7-2.4,4.4c-0.5,1.8-0.8,3.7-0.8,5.8v2  c0,2.2,0.2,4.1,0.8,5.8c0.6,1.7,1.4,3.2,2.4,4.4c1.1,1.2,2.3,2.2,3.8,2.8c1.5,0.7,3.1,1,5,1c2.4,0,4.4-0.5,6.1-1.3  c1.7-0.8,3.1-2,4-3.5c0.9-1.5,1.5-3.2,1.6-5.2h-6C295.8,498.1,295.6,499,294.9,499.7z"
        />
        <path
          fill={fill1}
          d="M257.7,482.2c0.7-0.3,1.6-0.5,2.6-0.5c1.1,0,2,0.2,2.7,0.6c0.7,0.3,1.3,0.9,1.6,1.5c0.3,0.6,0.5,1.3,0.5,2.2  h5.9c0-1.7-0.4-3.3-1.3-4.6c-0.9-1.4-2.1-2.4-3.7-3.2c-1.6-0.8-3.5-1.2-5.6-1.2c-1.5,0-3,0.2-4.3,0.6c-1.3,0.4-2.4,1-3.4,1.7  c-0.9,0.6-1.7,1.5-2.2,2.5s-0.8,2.1-0.8,3.3c0,1.3,0.3,2.4,0.8,3.3c0.5,1,1.2,1.8,2.1,2.5c0.9,0.8,1.9,1.4,3.1,1.9  c1.1,0.5,2.4,1,3.7,1.4c1.2,0.4,2.2,0.8,2.9,1.1c0.7,0.4,1.3,0.7,1.7,1.1c0.4,0.3,0.7,0.7,0.8,1.1c0.1,0.4,0.2,0.9,0.2,1.4  c0,0.7-0.2,1.3-0.3,1.7c-0.3,0.5-0.8,0.9-1.5,1.2c-0.6,0.3-1.5,0.4-2.5,0.4c-0.9,0-1.7-0.1-2.4-0.3c-0.7-0.1-1.3-0.4-1.8-0.8  c-0.5-0.4-0.9-0.9-1.2-1.5c-0.3-0.6-0.4-1.4-0.4-2.3h-6c0,1.7,0.3,3.1,1,4.3c0.7,1.2,1.6,2.2,2.7,3c1.1,0.7,2.4,1.3,3.8,1.7  c1.4,0.4,2.8,0.6,4.2,0.6c1.6,0,3-0.1,4.3-0.5c1.3-0.4,2.4-0.9,3.3-1.6c0.9-0.7,1.6-1.5,2.1-2.5s0.7-2.1,0.7-3.4  c0-1.2-0.2-2.3-0.6-3.2s-1-1.8-1.8-2.5c-0.8-0.7-1.8-1.4-3-2c-1.2-0.6-2.6-1.1-4.2-1.6c-1-0.3-1.8-0.6-2.5-0.9  c-0.7-0.3-1.3-0.6-1.8-1c-0.5-0.3-0.8-0.7-1.1-1.1c-0.3-0.4-0.4-0.8-0.4-1.3c0-0.7,0.2-1.3,0.5-1.8  C256.5,482.9,257,482.5,257.7,482.2z"
        />
        <path fill={fill1} d="M370.8,304h-8v8h8V304z" />
        <path fill={fill1} d="M354.3,295.8h-7.9v8h7.9V295.8z" />
        <path fill={fill1} d="M337.9,254.6h-8v8h8V254.6z" />
        <path
          fill={fill1}
          d="M387.5,320.5v8v0.2v8h8h0.3h8v-8v-0.2v-8h-8h-0.3H387.5z"
        />
        <path
          fill={fill1}
          d="M346.4,237.9h7.9v-8h-7.9h-0.3h-8h-0.2h-8v8v0.3v7.9h8v-8.2h8.2H346.4z"
        />
        <path
          fill={fill1}
          d="M403.8,262.6H445v-41.2h-41.2V262.6z M412,229.7h24.7v24.7H412V229.7z"
        />
        <path fill={fill1} d="M346.1,271.1v-0.3v-7.9h-8v7.9v0.3v8h8V271.1z" />
        <path fill={fill1} d="M321.4,312.3h-8v7.9h8V312.3z" />
        <path fill={fill1} d="M387.3,337h-8v8h8V337z" />
        <path fill={fill1} d="M370.8,229.9h-8v8h8V229.9z" />
        <path
          fill={fill1}
          d="M296.7,369.6h-41.2v41.2h41.2V369.6z M288.5,402.6h-24.7v-24.7h24.7V402.6z"
        />
        <path
          fill={fill1}
          d="M255.5,262.6h41.2v-41.2h-41.2V262.6z M263.8,229.7h24.7v24.7h-24.7V229.7z"
        />
        <path fill={fill1} d="M280.2,287.6h-8v7.9h8h0.3h8v-7.9h-8H280.2z" />
        <path fill={fill1} d="M329.6,262.9h-7.9v7.9h7.9V262.9z" />
        <path fill={fill1} d="M304.9,287.6H297v7.9h7.9V287.6z" />
        <path
          fill={fill1}
          d="M263.7,295.8h-7.9v8v0.2v8h7.9v-8.2h8.3v-8h-8H263.7z"
        />
        <path
          fill={fill1}
          d="M371.1,369.9h-8.3v8h8h0.3h7.9v-8v-0.2v-8h-7.9V369.9z"
        />
        <path
          fill={fill1}
          d="M428.7,410.8h8h0.3h7.9v-7.9v-0.3v-8v-0.2v-8H437v8v0.2v8.3h-8.3V410.8z"
        />
        <path fill={fill1} d="M428.5,345.2h-8v8h8V345.2z" />
        <path fill={fill1} d="M436.7,369.9h-8v8h8V369.9z" />
        <path
          fill={fill1}
          d="M395.5,304h-8h-0.2h-8v8.3h-8.2v8.2h-8.5v-8.2h-8v8.2h-8.2h-0.3h-8.2v-8.2h-8v7.9v0.3v8v0.2v8h8v-8.2h8.2h0.3  h8.2v8.5h-8.2v8v0.2v8h7.9h0.3h8h0.2h8v-8h-8.2v-8.5h8.2v-8.2h8.2v-8.3h8.3V312h8.2V304z"
        />
        <path
          fill={fill1}
          d="M436.7,295.8v-0.3v-7.9h-8h-0.2h-8h-0.3h-7.9v7.9h7.9h0.3h8.2v8.5h-8.2v8v0.3v7.9h8V312h8.2h0.3h7.9v-8h-8.2  V295.8z"
        />
        <path
          fill={fill1}
          d="M482.8,174.4H271.4c-32.7,0-59.2,26.5-59.2,59.2v206c0,10.1,8.2,18.4,18.4,18.4h199.1  c32.7,0,59.2-26.5,59.2-59.2V180.5C488.9,177.1,486.2,174.4,482.8,174.4z M395.5,213.2h57.7v57.7h-57.7V213.2z M247.3,213.2H305  v57.7h-57.7V213.2z M305,419.1h-57.7v-57.7H305V419.1z M321.7,419.3h-8.5v-8.5h8.5V419.3z M453.4,320.5h-8.2v8h8.2v16.7h-8.5V337  h-8.2v-16.5h-8V345h8.3v16.4h16.4v8.5h-8.2v16.2h8.2v33.2h-49.6v-8.2h-24.5v8.2h-8.5v-8.2h-8.2v-8.5H379v-8h-8.2v-8.2h-8.2v-8.2h-8  v8.2h-8.5v-16.7h8.2v-8h-8.2v-8.2h-8.2v-8.3h-8v16.2h8.2v16.8h-8.5v-8.3h-7.9v16.2h8.2v8.3h24.7v8.5h-8.2v16.4h-16.8v-8.5h8.3v-7.9  h-24.7v-33.2h8.2v-8h-8.2v-8.5h8.2v-24.5h-8v8.3H297v8h8.2v8.5h-25v-8.3h-16.5v-16.7h8.5v8.2h16.3v-8.2h24.7v-8h-16.5V312h16.5v-8.2  h8.2v-8h-16.2v8.2h-33v8h16.5v8.5h-32.9v33h-8.5v-74.4h8.5v8.2h7.9v-8.2h41.5v8.2h16.5v8.2h24.4v-7.9h-8.2v-8.3h-24.7v-49.6h16.4v-8  h-8.2v-8.5h8.5v8.2h8v-8.2h41.4v8.2h8.2v8.5h-8.2v16.2h8.2v8.5h-16.7v-8.2h-8.2v-8.2h-8v41.1h-8.2v8h32.9v8.2h24.5v-7.9h-8.3v-8.5  H437v8.2h8.2v8.2h8.2V320.5z M387.5,262.6v16.7H379v-16.7H387.5z M371.1,262.6v16.7h-8.5v-16.7H371.1z"
        />
        {children}
      </svg>
    );
  },
);

QrFrame2.displayName = "QrFrame2";

export default QrFrame2;
