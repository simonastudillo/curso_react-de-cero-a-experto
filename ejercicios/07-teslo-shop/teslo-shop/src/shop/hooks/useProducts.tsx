import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"

export const useProducts = () => {
   // TODO: Implementar lógica para obtener los productos utilizando React Query

   return useQuery({
      queryKey: ['products'],
      queryFn: getProductsAction
   })
}
