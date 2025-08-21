import { cn } from "@/lib/utils";

interface Props {
  character: string;
  isShowing: boolean;
  isSample: boolean;
  ended: boolean;
}

const Character: React.FC<Props> = ({
  character,
  isShowing,
  isSample,
  ended,
}) => {
  return (
    <div className="relative w-8">
      <div
        className={cn(
          "text-center text-4xl font-bold uppercase text-black dark:text-neutral-400",
          {
            "text-red-500": !isSample,
            invisible: !isShowing && !ended,
          },
        )}
      >
        {isShowing || ended ? character : "-"}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-black dark:bg-neutral-400" />
    </div>
  );
};

export default Character;
