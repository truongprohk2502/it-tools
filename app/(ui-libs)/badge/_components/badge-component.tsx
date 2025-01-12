import { VariantProps } from "class-variance-authority";
import { badgeVariants } from "./badge-helpers";

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  title: string;
  showOutline?: boolean;
  hidden?: boolean;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  title,
  shape,
  size,
  color,
  position,
  showOutline,
  hidden,
  children,
}) => {
  return (
    <div className="relative w-fit">
      {children}
      {!hidden && (
        <div
          data-outline={Boolean(showOutline).toString()}
          className={badgeVariants({ shape, size, position, color })}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Badge;
