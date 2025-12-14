import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction, type OptionsSearchHeroes } from "../actions/search-heroes.action";


export const useSearchHeroes = ({ name, team, category, universe, status, strength }: OptionsSearchHeroes) => {

   return useQuery({
      queryKey: ['heroes', { name, team, category, universe, status, strength }],
      queryFn: () => searchHeroesAction({ name, team, category, universe, status, strength }),
      staleTime: 1000 * 60 * 5, // 5 minutes
   })
}
