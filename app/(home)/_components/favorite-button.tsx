"use client";

import { StorageKeys } from "@/constants/storage";
import useDomLoaded from "@/hooks/useDomLoaded";
import useFavoriteTools from "@/stores/useFavoriteTools";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useLocalStorage } from "react-use";

interface Props {
  href: string;
}

const FavoriteButton: React.FC<Props> = ({ href }) => {
  const [_, setFavoriteStorageLinks] = useLocalStorage(
    StorageKeys.FavoriteToolLinks,
  );
  const { favoriteLinks, setFavoriteLinks } = useFavoriteTools();
  const domLoaded = useDomLoaded();

  const toggleFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();

    const newLinks = favoriteLinks.includes(href)
      ? favoriteLinks.filter((item) => item !== href)
      : [...favoriteLinks, href];

    setFavoriteLinks(newLinks);
    setFavoriteStorageLinks(newLinks);
  };

  if (!domLoaded) return null;

  const Icon = favoriteLinks?.includes(href) ? HeartFilledIcon : HeartIcon;

  return (
    <Icon
      className="absolute right-5 top-6 h-5 w-5 cursor-pointer"
      onClick={toggleFavorite}
    />
  );
};

export default FavoriteButton;
