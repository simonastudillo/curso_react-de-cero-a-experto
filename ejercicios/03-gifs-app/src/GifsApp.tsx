import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"

export const GifsApp = () => {
   return (
      <>
         <CustomHeader title="Buscador de Gifs" description="Descrubre y comparte el gif perfecto" />
         <CustomSearchBar placeholder="Busca lo que quieras" />
         <PreviousSearches searches={['Gokú', 'Dragon ball z']} />

         < GifList gifs={mockGifs} />
      </>
   )
}
