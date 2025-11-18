import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
   return (
      <>
         <CustomJumbotron
            title="Búsqueda de SuperHéroes"
            subtitle="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
         />
         <HeroStats />
      </>
   )
}

export default SearchPage;