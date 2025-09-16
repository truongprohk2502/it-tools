"use client";

import LoadingIcon from "@/assets/icons/loading.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useEffect, useRef, useState } from "react";
import SpinnerCard from "./_components/spinner-card";
import SpinnerDialog from "./_components/spinner-dialog";
import { SPINNERS } from "./constants";

const LoadingComponentsPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(true);
  const [isShowingCode, setIsShowingCode] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [cols, setCols] = useState<number>(4);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const listElement = listRef.current;

    if (!wrapperElement || !listElement) return;

    if (!window.ResizeObserver) {
      setLoaded(true);
      return;
    }

    const handleResize = () => {
      const width = wrapperElement.getBoundingClientRect().width;
      let alreadySet = false;
      const SIZE = 192;
      const GAP = 16;
      const COLS = [8, 7, 6, 5, 4];
      const getTotalWidth = (count: number) => count * SIZE + (count - 1) * GAP;
      for (const count of COLS) {
        if (width > getTotalWidth(count)) {
          setLoaded(true);
          alreadySet = true;
          setCols(count);
          break;
        }
      }
      if (!alreadySet) {
        setLoaded(true);
        setCols(4);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    handleResize();
    resizeObserver.observe(wrapperElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleShowCode = (source: string) => {
    setIsShowingCode(true);
    setCode(source);
  };

  return (
    <div ref={wrapperRef} className="mx-auto w-full">
      <ToolHeader
        title="Loading Components"
        description="Demonstrates various loading components with css-in-js style."
        href={Route.LoadingComponents}
        icon={LoadingIcon}
      />
      <div
        ref={listRef}
        className="mx-auto grid w-fit min-w-[50rem] gap-4"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {loaded &&
          SPINNERS.map((item, index) => (
            <SpinnerCard key={index} {...item} onClick={handleShowCode} />
          ))}
      </div>
      <SpinnerDialog
        open={isShowingCode}
        source={code}
        onOpenChange={setIsShowingCode}
      />
    </div>
  );
};

export default LoadingComponentsPage;
