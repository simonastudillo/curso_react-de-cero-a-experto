import type { GiphyRandomResponse } from "../data/giohy.response";

const API_KEY = 'f27mRsYu9GujEadQEM9xIa3a4v6gxf1G';

const createImageInsideDOM = (url: string): void => {

   const imgElement = document.createElement('img');
   imgElement.src = url;

   document.body.append(imgElement);
}

const getRamdomGifUrl = async (): Promise<string> => {

   const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

   const { data }: GiphyRandomResponse = await response.json();

   return data.images.original.url;
}

getRamdomGifUrl()
   .then(createImageInsideDOM);