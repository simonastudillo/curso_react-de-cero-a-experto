import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import { createUpdateProductAction } from "../actions/create-update-product.action"
import type { Product } from "@/interfaces/product.interface";

export const useProduct = (id: string) => {

   const queryClient = useQueryClient();

   const query = useQuery({
      queryKey: ['product', { id }],
      queryFn: () => getProductByIdAction(id),
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      enabled: !!id
   })

   const mutation = useMutation({
      mutationFn: createUpdateProductAction,
      onSuccess: (product: Product) => {
         queryClient.invalidateQueries({ queryKey: ['products'] }); // invalidar cache de productos
         queryClient.invalidateQueries({ queryKey: ['product', { id: product.id }] }); // invalidar cache del producto editado o creado
         queryClient.setQueryData(['product', { id: product.id }], product); // actualizar cache del producto editado o creado
      }
   });

   return {
      ...query,
      mutation,
   }
}
