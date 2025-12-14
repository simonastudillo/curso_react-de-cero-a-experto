import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface OptionsSearchHeroes {
   name?: string;
   team?: string;
   category?: string;
   universe?: string;
   status?: string;
   strength?: string;
}


export const searchHeroesAction = async (options: OptionsSearchHeroes) => {

   const { data } = await heroApi.get<Hero[]>("/search", {
      params: options
   });
   const heroes = data.map(hero => ({
      ...hero,
      image: `${BASE_URL}/images/${hero.image}`,
   }));
   return heroes;
}