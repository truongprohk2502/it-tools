"use client";

import { PropsWithChildren, useRef, useState } from "react";
import Header from "./header";
import LeftMenu from "./left-menu";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [expandingLeftMenu, setExpandingLeftMenu] = useState<boolean>(true);

  const leftMenuRef = useRef<HTMLDivElement>(null);

  const toggleLeftMenu = () => {
    const leftMenu = leftMenuRef.current!;
    if (expandingLeftMenu) {
      leftMenu.style.width = "0";
      setExpandingLeftMenu(false);
    } else {
      leftMenu.style.width = "20rem";
      setExpandingLeftMenu(true);
    }
  };

  return (
    <div className="flex">
      <div
        ref={leftMenuRef}
        className="sticky left-0 top-0 h-screen w-[20rem] flex-shrink-0 shadow-md transition-all duration-150 dark:bg-neutral-700"
      >
        <LeftMenu />
      </div>
      <div className="min-h-screen flex-auto bg-neutral-100 dark:bg-neutral-800">
        <Header isOpenMenu={expandingLeftMenu} onToggleMenu={toggleLeftMenu} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
