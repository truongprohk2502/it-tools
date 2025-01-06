import { cn } from "@/lib/utils";
import Link from "next/link";
import FavoriteButton from "./favorite-button";

export interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  const Icon = icon;

  return (
    <div
      className={cn(
        "relative h-[10.5rem] cursor-pointer rounded-md bg-background px-4 pb-6 pt-4 shadow-sm outline outline-1 outline-transparent transition-all duration-300",
        "border border-neutral-300 hover:border-blue-500 hover:outline-blue-500 dark:border-neutral-700",
      )}
    >
      <Link href={href}>
        <Icon className="h-10 w-10" />
        <h2 className="mt-4 text-lg font-medium">{title}</h2>
        <p className="line-clamp-2 text-sm text-neutral-500">{description}</p>
      </Link>
      <FavoriteButton href={href} />
    </div>
  );
};

export default FeatureCard;
