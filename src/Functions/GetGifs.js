export const getGifs = async (newCategory) => {
   const url = `https://api.giphy.com/v1/gifs/search?api_key=6ecL7Z8YgM3cFIMMAwS1nzQcC1u2vUju&q=${newCategory}&limit=10`;
   const response = await fetch(url)

   const { data } = await response.json();
   const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
   }));

   console.log(gifs);
   return gifs;
}