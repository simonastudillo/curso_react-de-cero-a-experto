import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { GetGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
   const [previousTerms, setPreviousTerms] = useState<string[]>([]);
   const [gifs, setGifs] = useState<Gif[]>([]);

   const handleTermClick = (term: string) => {
      handleSearch(term);
   }

   const gifsCache = useRef<Record<string, Gif[]>>({});

   const handleSearch = (query: string = '') => {
      const cleanQuery = query.trim().toLowerCase();
      if (cleanQuery.length === 0) return;

      if (gifsCache.current[cleanQuery]) {
         setGifs(gifsCache.current[cleanQuery]);
         return;
      }

      if (previousTerms.includes(cleanQuery)) {
         const filteredTerms = previousTerms.filter(term => term !== cleanQuery);
         setPreviousTerms([cleanQuery, ...filteredTerms].slice(0, 8));
      } else {
         setPreviousTerms([cleanQuery, ...previousTerms].slice(0, 8));
      }

      handleFetch(cleanQuery);

   }

   const handleFetch = async (query: string): Promise<void> => {
      const gifs = await GetGifsByQuery(query);
      setGifs(gifs);
      gifsCache.current[query] = gifs;
   }

   return {
      gifs,
      previousTerms,
      handleSearch,
      handleTermClick,
   }
}
