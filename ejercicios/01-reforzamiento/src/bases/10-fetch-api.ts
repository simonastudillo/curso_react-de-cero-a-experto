import type { GiphyRandomResponse } from "../data/giohy.response";

const API_KEY = 'f27mRsYu9GujEadQEM9xIa3a4v6gxf1G';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {

   const imgElement = document.createElement('img');
   imgElement.src = url;

   document.body.append(imgElement);
}

myRequest
   .then((response) => response.json())
   .then(({ data }: GiphyRandomResponse) => {

      const imageUrl = data.images.original.url;
      createImageInsideDOM(imageUrl);

   })
   .catch((err) => {
      console.error(err)
   });