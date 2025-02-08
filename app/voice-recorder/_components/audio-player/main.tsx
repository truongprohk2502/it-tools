"use client";

import { useRef } from "react";

interface Props {
  onClick: (position: number) => void;
}

const Main: React.FC<Props> = ({ onClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    const element = ref.current!;
    const rect = element.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentageX = (clickX / rect.width) * 100;
    onClick(percentageX);
  };

  return (
    <div
      ref={ref}
      className="absolute inset-x-0 bottom-16 top-16 cursor-pointer"
      onClick={handleClick}
    />
  );
};

export default Main;
