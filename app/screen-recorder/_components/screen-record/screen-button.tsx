import { cn } from "@/lib/utils";

interface Props {
  type: "start" | "stop";
  onClick: () => void;
}

const ScreenButton: React.FC<Props> = ({ type, onClick }) => {
  return (
    <div
      className="h-14 w-14 cursor-pointer rounded-full bg-black bg-opacity-20 p-2 transition-all duration-150 hover:p-1.5"
      onClick={onClick}
    >
      <div
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full border-4 bg-transparent p-2 transition-all duration-150",
          type === "stop" ? "border-neutral-400" : "border-red-500",
        )}
      >
        <div
          className={cn(
            "h-full w-full transition-all duration-150",
            type === "stop"
              ? "rounded-sm bg-neutral-400"
              : "rounded-full bg-red-500",
          )}
        />
      </div>
    </div>
  );
};

export default ScreenButton;
