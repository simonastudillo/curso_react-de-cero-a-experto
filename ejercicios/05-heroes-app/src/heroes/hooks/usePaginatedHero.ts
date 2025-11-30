import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

interface UsePaginatedHero {
   page: number;
   limit: number;
}


export const usePaginatedHero = ({ page, limit }: UsePaginatedHero) => {
   return useQuery({
      queryKey: ['heroes', { page, limit }],
      queryFn: () => getHeroesByPageAction(+page, +limit),
      staleTime: 1000 * 60 * 5, // 5 minutes
   })
}
