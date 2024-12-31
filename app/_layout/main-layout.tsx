import { PropsWithChildren } from "react";
import LeftMenu from "./left-menu";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex">
      <LeftMenu />
      <div className="min-h-screen flex-auto bg-neutral-100 dark:bg-neutral-800">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
