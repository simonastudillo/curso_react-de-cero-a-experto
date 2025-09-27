import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"
import { GetGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {

   const [previousTerms, setPreviousTerms] = useState<string[]>([]);
   const [gifs, setGifs] = useState<Gif[]>([]);

   const handleTermClick = (term: string) => {
      console.log(term);
   }

   const handleSearch = async (query: string = '') => {
      const cleanQuery = query.trim().toLowerCase();
      if (cleanQuery.length === 0) return;

      if (previousTerms.includes(cleanQuery)) return;

      setPreviousTerms([cleanQuery, ...previousTerms].slice(0, 8));

      const gifs = await GetGifsByQuery(cleanQuery);
      setGifs(gifs);
   }

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
