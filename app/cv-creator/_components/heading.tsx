import { cn } from "@/lib/utils";

interface Props {
  label: string;
  color?: "dark" | "light";
  border?: boolean;
  className?: string;
}

const Heading: React.FC<Props> = ({
  label,
  color = "dark",
  border,
  className,
}) => {
  return (
    <div className="flex items-center gap-4">
      <p
        className={cn(
          "text-[1.2em] font-bold",
          {
            "text-neutral-700": color === "dark",
            "text-neutral-100": color === "light",
          },
          className,
        )}
      >
        {label}
      </p>
      {border && (
        <div
          className={cn("h-[1px] flex-auto", {
            "bg-neutral-200": color === "dark",
            "bg-neutral-800": color === "light",
          })}
        />
      )}
    </div>
  );
};

export default Heading;
