"use client";

import { cn } from "@/lib/utils";
import { KeyStatus } from "../constants";

interface Props {
  character: React.ReactNode;
  status: KeyStatus;
  ended?: boolean;
  onClick: () => void;
}

const Key: React.FC<Props> = ({ character, status, ended, onClick }) => {
  return (
    <button
      className={cn(
        "h-14 w-14 rounded-lg border-2 bg-transparent text-lg font-bold uppercase disabled:cursor-not-allowed disabled:opacity-50",
        {
          "border-green-500 bg-green-400 text-gray-600":
            status === KeyStatus.Correct,
          "border-red-500 bg-red-400 text-gray-600":
            status === KeyStatus.Incorrect,
          "border-gray-400 text-gray-600 dark:text-gray-200":
            status === KeyStatus.Default,
        },
        {
          "flex items-center justify-center border-blue-500 bg-blue-400 text-gray-200 dark:bg-blue-600":
            status === KeyStatus.Action,
        },
      )}
      onClick={onClick}
      disabled={
        ended || (status !== KeyStatus.Default && status !== KeyStatus.Action)
      }
    >
      {character}
    </button>
  );
};

export default Key;
