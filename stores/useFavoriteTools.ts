import { create } from "zustand";

interface StoreProps {
  favoriteLinks: string[];
  setFavoriteLinks: (links: string[]) => void;
}

const useFavoriteTools = create<StoreProps>((set) => ({
  favoriteLinks: [],
  setFavoriteLinks: (favoriteLinks) => set({ favoriteLinks }),
}));

export default useFavoriteTools;
