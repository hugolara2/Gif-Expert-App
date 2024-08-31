import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({ newCategory }) => {

   const { images, isLoading } = useFetchGifs(newCategory);
   
   return (
      <>
         <h3>{ newCategory }</h3>
         {
            isLoading && (<h2>Loading...</h2>)
         }
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


