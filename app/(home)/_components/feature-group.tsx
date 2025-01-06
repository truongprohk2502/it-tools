import FavoriteCard from "./favorite-card";
import FeatureCard, { FeatureCardProps } from "./feature-card";

interface Props {
  title: string;
  items: FeatureCardProps[];
  hasFavoriteCard?: boolean;
}

const FeatureGroup: React.FC<Props> = ({ title, items, hasFavoriteCard }) => {
  return (
    <div>
      <p className="mt-6 font-semibold">{title}</p>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {hasFavoriteCard && <FavoriteCard />}
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureGroup;
