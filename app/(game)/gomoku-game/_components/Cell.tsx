"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";
import { CellStatus } from "../constants";

interface Props {
  row: number;
  col: number;
  highlight: boolean;
  status: CellStatus;
  onClick: (row: number, col: number, status: CellStatus) => void;
}

const Cell: React.FC<Props> = ({ row, col, highlight, status, onClick }) => {
  const handleClick = () => {
    if (status !== CellStatus.None) return;
    onClick(row, col, CellStatus.Player);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        highlight
          ? "bg-neutral-400 dark:bg-neutral-600"
          : "bg-neutral-200 dark:bg-neutral-500",
        {
          "text-green-500 dark:text-green-400": status === CellStatus.Player,
          "text-red-500 dark:text-red-500": status === CellStatus.Computer,
        },
      )}
      onClick={handleClick}
    >
      {status === CellStatus.Player ? (
        <CheckIcon className="h-6 w-6" />
      ) : status === CellStatus.Computer ? (
        <XIcon className="h-6 w-6" />
      ) : null}
    </div>
  );
};

export default Cell;
