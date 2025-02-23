import { cn } from "@/lib/utils";
import { Level } from "../constants";
import type { Question } from "../types";

interface Props {
  data: Question;
  complete: boolean;
  onClick: (questionId: number) => void;
}

const QuestionItem: React.FC<Props> = ({ data, complete, onClick }) => {
  const handleClick = () => onClick(data.id);

  return (
    <div
      className="group cursor-pointer rounded-md border border-neutral-200 dark:border-neutral-500"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between rounded-t-md bg-blue-400 px-2 py-1 dark:bg-blue-600">
        <div
          className={cn("rounded-md px-2 py-0.5 text-sm text-neutral-100", {
            "bg-green-500": data.level === Level.Easy,
            "bg-orange-500": data.level === Level.Medium,
            "bg-red-500": data.level === Level.Hard,
          })}
        >
          {data.level.toUpperCase()}
        </div>
        <div
          className={cn(
            "rounded-md px-2 py-0.5 text-sm text-neutral-100",
            complete ? "bg-green-500" : "bg-red-500",
          )}
        >
          {complete ? "Complete" : "Incomplete"}
        </div>
      </div>
      <div className="rounded-b-md border-t border-neutral-200 bg-slate-500 px-2 py-1 text-neutral-200 group-hover:bg-slate-600 dark:border-neutral-500 dark:bg-slate-700 group-hover:dark:bg-slate-900">
        {data.question}
      </div>
    </div>
  );
};

export default QuestionItem;
