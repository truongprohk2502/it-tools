"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { StorageKeys } from "@/constants/storage";
import { tools } from "@/constants/tools";
import useDomLoaded from "@/hooks/useDomLoaded";
import useFavoriteTools from "@/stores/useFavoriteTools";
import { useEffect, useMemo } from "react";
import { useLocalStorage } from "react-use";
import FeatureGroup from "./feature-group";

const FavoriteList: React.FC = () => {
  const [favoriteLinksFromStorage] = useLocalStorage<string[]>(
    StorageKeys.FavoriteToolLinks,
  );
  const { favoriteLinks, setFavoriteLinks } = useFavoriteTools();
  const domLoaded = useDomLoaded({ delay: 200 });

  useEffect(() => {
    setFavoriteLinks(favoriteLinksFromStorage || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const favoriteTools = useMemo(() => {
    const toolList = [];
    for (const link of favoriteLinks) {
      const tool = tools.find((item) => item.href === link);
      if (tool) toolList.push(tool);
    }
    return toolList;
  }, [favoriteLinks]);

  if (!domLoaded)
    return (
      <div>
        <p className="mt-6 font-semibold">Favorites</p>
        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-[166px] rounded-md" />
          ))}
        </div>
      </div>
    );

  return (
    <FeatureGroup title="Favorites" items={favoriteTools} hasFavoriteCard />
  );
};

export default FavoriteList;
