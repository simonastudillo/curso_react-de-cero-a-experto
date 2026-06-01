import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustromJumbotron } from "@/shop/components/CustromJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"

export const HomePage = () => {

   const { data } = useProducts();

   return (
      <>
         <CustromJumbotron title="Todos los productos" />
         <ProductsGrid products={products} />
         <CustomPagination totalPages={7} />
      </>
   )
}
