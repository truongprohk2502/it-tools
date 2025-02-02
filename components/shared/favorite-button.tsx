"use client";

import { StorageKeys } from "@/constants/storage";
import useDomLoaded from "@/hooks/use-dom-loaded";
import { cn } from "@/lib/utils";
import useFavoriteTools from "@/stores/useFavoriteTools";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useLocalStorage } from "react-use";

interface Props {
  href: string;
  animation?: boolean;
  className?: string;
}

const FavoriteButton: React.FC<Props> = ({
  href,
  animation = true,
  className,
}) => {
  const [, setFavoriteStorageLinks] = useLocalStorage(
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

  const isFavorite = favoriteLinks?.includes(href);

  const Icon = isFavorite ? HeartFilledIcon : HeartIcon;

  return (
    <Icon
      className={cn(
        "h-5 w-5 cursor-pointer",
        animation && "transition-all duration-150 hover:scale-150",
        isFavorite && "text-red-500",
        className,
      )}
      onClick={toggleFavorite}
    />
  );
};

export default FavoriteButton;
