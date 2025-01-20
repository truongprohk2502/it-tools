import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("relative inline-block w-[1em] h-[1em]", {
  variants: {
    size: {
      small: "text-[1.5rem]",
      medium: "text-[2rem]",
      large: "text-[3rem]",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Fade: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={cn(sizeVariants({ size }), className)}>
      {new Array(12).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: `${index * 0.083}s`,
            transform: `rotate(${index * 30}deg)`,
          }}
          className="animate-fade absolute bottom-0 left-[0.4629em] h-[0.2777em] w-[0.074em] origin-[center_-0.2222em] rounded-[0.0555em]"
        />
      ))}
    </div>
  );
};

export default Fade;
