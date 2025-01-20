import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("grid grid-cols-4", {
  variants: {
    size: {
      small: "w-[2.25rem] h-6 gap-1",
      medium: "w-[2.875rem] h-8 gap-1.5",
      large: "w-[4.5rem] h-12 gap-2",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Bounce: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={cn(sizeVariants({ size }), className)}>
      {new Array(4).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: `${index * 0.16}s`,
          }}
          className="my-auto aspect-square flex-shrink-0 animate-bounce rounded-full first-letter:flex-grow-0"
        />
      ))}
    </div>
  );
};

export default Bounce;
