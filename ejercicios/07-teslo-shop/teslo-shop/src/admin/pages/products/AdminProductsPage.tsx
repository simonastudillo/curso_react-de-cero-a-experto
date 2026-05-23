import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
   return (
      <>

         <div className="flex items-center justify-between mb-10">
            <AdminTitle
               title="Products"
               subtitle="Aqui puedes ver y administar tus productos"
            />
            <Link to={`/admin/products/new`}>
               <Button>
                  <PlusIcon />
                  Nuevo producto
               </Button>
            </Link>
         </div>

         <Table className="bg-white p-10 shadow--xs border border-gray-200 rounded mb-10">
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Imagen</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Inventario</TableHead>
                  <TableHead>Tallas</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>
                     <img
                        src="https://placehold.co/150x150"
                        alt="Producto 1"
                        className="w-20 h-20 object-cover rounded"
                     />
                  </TableCell>
                  <TableCell>Producto 1</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell>Categoria 1</TableCell>
                  <TableCell className="text-right">100</TableCell>
                  <TableCell>X, L, XL</TableCell>
                  <TableCell>
                     <Link to={`/admin/products/t-shirt-teslo`}>
                        Editar
                     </Link>
                  </TableCell>
               </TableRow>
            </TableBody>
         </Table>

         <CustomPagination totalPages={10} />
      </>
   )
}
