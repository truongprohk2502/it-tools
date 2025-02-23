import { cn } from "@/lib/utils";
import { ShieldCheckIcon, ShieldXIcon } from "lucide-react";

interface Props {
  correct: boolean;
}

const ResultBadge: React.FC<Props> = ({ correct }) => {
  return (
    <div
      className={cn(
        "mt-4 flex items-center border-l-4 border-blue-500 py-2 pl-2 pr-4 text-neutral-200",
        correct ? "bg-green-600" : "bg-red-600",
      )}
    >
      {correct ? (
        <ShieldCheckIcon className="h-6 w-6" />
      ) : (
        <ShieldXIcon className="h-6 w-6" />
      )}
      <span className="ml-2">
        {correct ? "Your answer is correct" : "Your answer is incorrect"}
      </span>
    </div>
  );
};

export default ResultBadge;
