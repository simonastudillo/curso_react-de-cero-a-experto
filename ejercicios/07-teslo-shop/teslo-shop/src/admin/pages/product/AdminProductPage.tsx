import { Navigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hook/useProduct';
import { CustomFullScreenLoading } from '@/components/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';

export const AdminProductPage = () => {
   const { id } = useParams();

   const { data: product, isLoading, isError, handleSubmit } = useProduct(id!);

   const productTitle = id === 'new' ? 'Nuevo producto' : 'Editar producto';
   const productSubtitle =
      id === 'new'
         ? 'Aquí puedes crear un nuevo producto.'
         : 'Aquí puedes editar el producto.';

   if (isError) {
      return <Navigate to="/admin/products" />;
   }

   if (isLoading) {
      return <CustomFullScreenLoading />;
   }

   if (!product) {
      return <Navigate to="/admin/products" />;
   }

   return (
      <ProductForm title={productTitle} subTitle={productSubtitle} product={product} onSubmit={handleSubmit} />
   )
};