import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../Functions/GetGifs";

export const GifGrid = ({ newCategory }) => {

   const [images, setImages] = useState([])

   useEffect(() => {
      getGifs(newCategory)
         .then(newImages => setImages(newImages))   
   }, [])
   
   return (
      <>
         <h3>{ newCategory }</h3>
         <div className="card-grid">
            {
               images.map( ( image ) => (
                  <GifItem 
                     key={ image.id }
                     { ...image }
                  />
               ))
            }
         </div>
      </>
   )
}


