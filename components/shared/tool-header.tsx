import FavoriteButton from "./favorite-button";

interface Props {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const ToolHeader: React.FC<Props> = ({ title, description, icon, href }) => {
  const Icon = icon;
  return (
    <div className="mb-8 border-b border-neutral-300 py-4 pb-4 dark:border-neutral-700">
      <div className="flex items-center">
        <Icon className="mr-2 h-8 w-8" />
        <h2 className="mt-1 flex-auto text-3xl font-bold">{title}</h2>
        <FavoriteButton href={href} animation={false} />
      </div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default ToolHeader;
