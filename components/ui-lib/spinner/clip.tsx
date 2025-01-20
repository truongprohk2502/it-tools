import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("animate-clip-loader", {
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

const Clip: React.FC<Props> = ({ color, size, className }) => {
  return (
    <svg
      viewBox="25 25 50 50"
      className={cn(sizeVariants({ size }), className)}
    >
      <circle
        r="20"
        cy="50"
        cx="50"
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeDasharray="1,200"
        strokeDashoffset={0}
        strokeLinecap="round"
        className="animate-clip-circle"
      ></circle>
    </svg>
  );
};

export default Clip;
