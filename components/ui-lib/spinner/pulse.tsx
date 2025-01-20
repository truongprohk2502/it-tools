import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("relative flex items-center", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Pulse: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={cn(sizeVariants({ size }), className)}>
      {new Array(8).fill(null).map((_, index) => (
        <div
          key={index}
          style={{ transform: `rotate(${index * 45}deg)` }}
          className="absolute left-0 top-0 flex h-full w-full items-center"
        >
          <div
            style={{
              backgroundColor: color,
              animationDelay: `${(8 - index) * 0.125}s`,
            }}
            className="h-1/5 w-1/5 scale-0 animate-pulse rounded-full opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default Pulse;
