import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustromJumbotron } from "@/shop/components/CustromJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
   return (
      <>
         <CustromJumbotron title="Todos los productos" />
         <ProductsGrid products={products} />
         <CustomPagination totalPages={7} />
      </>
   )
}
