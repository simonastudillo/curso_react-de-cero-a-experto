import { Navigate, useNavigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hook/useProduct';
import { CustomFullScreenLoading } from '@/components/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';

export const AdminProductPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const { data: product, isLoading, isError, mutation } = useProduct(id!);

   const handleSubmit = async (productLike: Partial<Product>) => {
      await mutation.mutateAsync(productLike, {
         onSuccess: (data: Product) => {
            toast.success('Producto guardado correctamente');
            navigate(`/admin/products/${data.id}`);
         },
         onError: (error) => {
            console.log(error);
            toast.error('Error al guardar el producto');
         }
      });
   }

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