import { toolGroups } from "@/constants/tools";
import FavoriteList from "./_components/favorite-list";
import FeatureGroup from "./_components/feature-group";

export default function Home() {
  return (
    <div className="mx-auto max-w-[84rem]">
      <FavoriteList />
      {toolGroups.map((item) => (
        <FeatureGroup key={item.title} {...item} />
      ))}
    </div>
  );
}
