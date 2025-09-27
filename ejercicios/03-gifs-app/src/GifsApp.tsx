import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"

export const GifsApp = () => {

   const { previousTerms, gifs, handleSearch, handleTermClick } = useGifs();

   return (
      <>
         <CustomHeader title="Buscador de Gifs" description="Descrubre y comparte el gif perfecto" />
         <CustomSearchBar
            placeholder="Busca lo que quieras"
            onQuery={handleSearch}
         />
         <PreviousSearches
            searches={previousTerms}
            onLabelClicked={handleTermClick}
         />

         < GifList gifs={gifs} />
      </>
   )
}
