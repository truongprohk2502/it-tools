"use client";

import { cn } from "@/lib/utils";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

interface Props {
  open: boolean;
  done: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

const MemoryCard: React.FC<Props> = ({ open, done, icon: Icon, onClick }) => {
  return (
    <div
      style={{ perspective: "1000px" }}
      className={cn("aspect-square rounded-3xl bg-transparent", {
        "cursor-pointer": !done,
      })}
      onClick={onClick}
    >
      <div
        style={{
          transform: open || done ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        className="transform-3d relative h-full w-full rounded-3xl transition-all duration-700"
      >
        <div className="backface-hidden absolute inset-0 flex items-center justify-center rounded-3xl bg-gray-300 dark:bg-gray-600">
          <QuestionMarkIcon className="h-12 w-12" />
        </div>
        <div
          className={cn(
            "rotate-y-180 backface-hidden absolute inset-0 flex transform items-center justify-center rounded-3xl transition-all duration-700",
            done ? "bg-orange-200" : "bg-gray-400 dark:bg-gray-400",
          )}
        >
          <Icon width={72} height={72} />
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
