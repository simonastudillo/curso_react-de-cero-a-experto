import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
   return (
      <>
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