"use client";

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
  const domLoaded = useDomLoaded();

  useEffect(() => {
    setFavoriteLinks(favoriteLinksFromStorage || []);
  }, []);

  const favoriteTools = useMemo(() => {
    const toolList = [];
    for (let link of favoriteLinks) {
      const tool = tools.find((item) => item.href === link);
      if (tool) toolList.push(tool);
    }
    return toolList;
  }, [favoriteLinks]);

  if (!domLoaded || !favoriteTools.length) return null;

  return <FeatureGroup title="Favorites" items={favoriteTools} />;
};

export default FavoriteList;
