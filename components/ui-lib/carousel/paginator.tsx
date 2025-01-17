import { cn } from "@/lib/utils";

interface Props {
  current: number;
  total: number;
}

const Paginator: React.FC<Props> = ({ current, total }) => {
  const currentPage = current >= total - 1 ? total - 1 : current;

  return (
    <div className="absolute inset-x-3 bottom-4 z-[1] flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 w-2 rounded-full shadow-md",
            index === currentPage ? "bg-neutral-200" : "bg-neutral-400",
          )}
        />
      ))}
    </div>
  );
};

export default Paginator;
