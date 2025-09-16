const API_KEY = 'f27mRsYu9GujEadQEM9xIa3a4v6gxf1G';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
   .then((response) => response.json())
   .then((data) => {

      const imageUrl = data.data.images.original.url;
      console.log(imageUrl)

      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

      document.body.append(imgElement)

   })
   .catch((err) => {
      console.error(err)
   });