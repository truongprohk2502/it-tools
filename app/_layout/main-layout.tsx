"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, useRef, useState } from "react";
import Header from "./header";
import LeftMenu from "./left-menu";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [expandingLeftMenu, setExpandingLeftMenu] = useState<boolean>(true);

  const leftMenuRef = useRef<HTMLDivElement>(null);
  const mainBodyRef = useRef<HTMLDivElement>(null);

  const toggleLeftMenu = () => {
    const leftMenu = leftMenuRef.current!;
    const mainBody = mainBodyRef.current!;
    if (expandingLeftMenu) {
      leftMenu.style.width = "0";
      mainBody.style.left = "0";
      setExpandingLeftMenu(false);
    } else {
      leftMenu.style.width = "20rem";
      mainBody.style.left = "20rem";
      setExpandingLeftMenu(true);
    }
  };

  return (
    <>
      <div
        ref={leftMenuRef}
        className="fixed inset-y-0 left-0 z-20 w-[20rem] flex-shrink-0 bg-background text-foreground shadow-md transition-all duration-150"
      >
        <LeftMenu />
      </div>
      <div
        ref={mainBodyRef}
        className={cn(
          "fixed inset-y-0 left-[20rem] right-0 flex flex-col bg-main-light transition-all duration-150 dark:bg-main-dark",
        )}
      >
        <div className="h-full w-full overflow-auto">
          <div className="sticky top-0 z-10 h-[4rem] flex-shrink-0">
            <Header
              isOpenMenu={expandingLeftMenu}
              onToggleMenu={toggleLeftMenu}
            />
          </div>
          <div className="flex-auto px-6 py-8">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
