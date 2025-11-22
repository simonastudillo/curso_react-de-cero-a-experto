import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs, type BreadcrumbItem } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
   const breadcrumbItems: BreadcrumbItem[] = [
      { label: "Home", url: "/" }
   ];

   return (
      <>
         <CustomBreadcrumbs
            items={breadcrumbItems} currentPage="Buscar" />
         <CustomJumbotron
            title="Búsqueda de SuperHéroes"
            subtitle="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
         />
         <HeroStats />
         <SearchControls />
      </>
   )
}

export default SearchPage;