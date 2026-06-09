import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"
import { useParams, useSearchParams } from "react-router";

export const useProducts = () => {
   // TODO: Implementar lógica para obtener los productos utilizando React Query
   const [searchParams] = useSearchParams();
   const { gender } = useParams();

   const sizes = searchParams.get('sizes') || '';
   const limit = searchParams.get('limit') || 9;
   const page = searchParams.get('page') || 1;
   const offset = (Number(page) - 1) * Number(limit);

   const price = searchParams.get('price') || 'any';
   let minPrice = price.split('-')[0] || undefined;
   let maxPrice = price.split('-')[1] || undefined;
   if (minPrice == '200+') {
      minPrice = '200';
      maxPrice = undefined;
   } else if (minPrice === 'any') {
      minPrice = undefined;
      maxPrice = undefined;
   }

   const query = searchParams.get('query') || undefined;

   return useQuery({
      queryKey: ['products', { limit, offset, sizes, gender, minPrice, maxPrice, query }],
      queryFn: () => getProductsAction({
         limit: isNaN(+limit) ? 9 : limit,
         offset: isNaN(offset) ? 0 : offset,
         sizes,
         gender,
         minPrice,
         maxPrice,
         query
      }),
      staleTime: 1000 * 60 * 5,
   })
}
