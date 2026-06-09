import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustromJumbotron } from "@/shop/components/CustromJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"

export const GenderPage = () => {

   const { gender } = useParams();
   const { data } = useProducts();

   const genderLabel = gender === 'men' ? 'Hombres'
      : gender === 'women' ? 'Mujeres'
         : gender === 'kids' ? 'Niños'
            : 'Todos los productos';

   return (
      <>
         <CustromJumbotron title={genderLabel} />
         <ProductsGrid products={data?.products || []} />
         <CustomPagination totalPages={data?.pages || 0} />
      </>
   )
}
