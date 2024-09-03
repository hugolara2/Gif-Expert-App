import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (newCategory) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getImages = async () => {
      const newImages = await getGifs(newCategory);
      setImages(newImages);
      setIsLoading(false);
   }

   useEffect(() => {
      getImages();
   }, []);

   return {
      images,
      isLoading
   }
}