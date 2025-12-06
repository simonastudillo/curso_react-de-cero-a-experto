import { createContext, useEffect, useState, type PropsWithChildren } from "react";
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

const getFavoritesFromStorage = (): Hero[] => {
   const favorites = localStorage.getItem('favoriteHeroes');
   return favorites ? JSON.parse(favorites) : [];
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

   const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromStorage());

   const toggleFavorite = (hero: Hero) => {
      const heroExists = favorites.find(fav => fav.id === hero.id);

      if (heroExists) {
         setFavorites(favorites.filter(fav => fav.id !== hero.id));
         return;
      }

      setFavorites([...favorites, hero]);
   }

   useEffect(() => {
      localStorage.setItem('favoriteHeroes', JSON.stringify(favorites));
   }, [favorites])

   const isFavorite = (hero: Hero) => {
      return favorites.some(fav => fav.id === hero.id);
   }

   return (
      <FavoriteHeroContext value={{
         favorites: favorites,
         favoriteCount: favorites.length,
         toggleFavorite: toggleFavorite,
         isFavorite: isFavorite,
      }}>
         {children}
      </FavoriteHeroContext>
   )
}
