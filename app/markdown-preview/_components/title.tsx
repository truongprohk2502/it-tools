import { cn } from "@/lib/utils";

interface Props {
  title: string;
  border?: boolean;
}

const Title: React.FC<Props> = ({ title, border }) => {
  return (
    <div
      className={cn("my-auto flex items-center justify-between px-4", {
        "border-r border-neutral-200 dark:border-neutral-800": border,
      })}
    >
      <span className="text-xl font-bold text-neutral-600 dark:text-neutral-300">
        {title}
      </span>
    </div>
  );
};

export default Title;
