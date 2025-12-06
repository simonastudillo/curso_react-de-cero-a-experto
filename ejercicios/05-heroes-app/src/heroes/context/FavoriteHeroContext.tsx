import { createContext, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface"

export interface FavoriteHeroContextProps {
   // State
   favorites: Hero[];
   favoriteCount: number;
   // Methods
   toggleFavorite: (hero: Hero) => void;
   isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext<FavoriteHeroContextProps>({} as FavoriteHeroContextProps);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

   const [favorites, setFavorites] = useState<Hero[]>([]);

   const toggleFavorite = (hero: Hero) => {
      const heroExists = favorites.find(fav => fav.id === hero.id);

      if (heroExists) {
         setFavorites(favorites.filter(fav => fav.id !== hero.id));
         return;
      }

      setFavorites([...favorites, hero]);
   }

   return (
      <FavoriteHeroContext value={{
         favorites: favorites,
         favoriteCount: favorites.length,
         toggleFavorite: toggleFavorite,
         isFavorite: (hero: Hero) => false,
      }}>
         {children}
      </FavoriteHeroContext>
   )
}
