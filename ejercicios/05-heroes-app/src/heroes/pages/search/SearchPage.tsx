import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs, type BreadcrumbItem } from "@/components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";
import { useSearchHeroes } from "@/heroes/hooks/useSearchHeroes";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
   const breadcrumbItems: BreadcrumbItem[] = [
      { label: "Home", url: "/" }
   ];
   const [searchParams] = useSearchParams();

   const name = searchParams.get("name") || "";
   const team = searchParams.get("team") || "";
   const category = searchParams.get("category") || "";
   const universe = searchParams.get("universe") || "";
   const status = searchParams.get("status") || "";
   const strength = searchParams.get("strength") || "";

   const { data: heroesResponse = [] } = useSearchHeroes({ name, team, category, universe, status, strength });

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
         <HeroGrid heroes={heroesResponse} />
      </>
   )
}

export default SearchPage;