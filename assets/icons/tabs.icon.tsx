import { SVGProps } from "react";

const TabsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      version="1.2"
      baseProfile="tiny"
      {...props}
    >
      <path d="M18 4h-10c-1.104 0-2 .896-2 2v2h-1c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h9c1.104 0 2-.896 2-2v-1h2c1.104 0 2-.896 2-2v-10c0-1.104-.896-2-2-2zm-13 15v-9h8.5c.275 0 .5.225.5.5v8.5h-9zm13-3h-3v-5.5c0-.827-.673-1.5-1.5-1.5h-5.5v-3h10v10z" />
    </svg>
  );
};

export default TabsIcon;
