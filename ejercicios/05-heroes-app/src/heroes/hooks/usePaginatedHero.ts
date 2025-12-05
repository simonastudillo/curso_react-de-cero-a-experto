import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

interface UsePaginatedHero {
   page: number;
   limit: number;
   category?: string;
}


export const usePaginatedHero = ({ page, limit, category = 'all' }: UsePaginatedHero) => {
   return useQuery({
      queryKey: ['heroes', { category, page, limit }],
      queryFn: () => getHeroesByPageAction(+page, +limit, category),
      staleTime: 1000 * 60 * 5, // 5 minutes
   })
}
