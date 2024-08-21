import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
   
   const [categories, setCategories] = useState(['Naruto', 'Metal Gear']);
   
   const onAddCategory = (newCategory) => {
      
      if(categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) { 
         return;
      }

      setCategories([newCategory, ...categories]);
   }

   return(
      <>
         <h1>Gif Expert App</h1>
         <AddCategory 
            onNewCategory={ onAddCategory }
         />
         {
            categories.map(( category ) => (
               <GifGrid 
                  key={ category } 
                  newCategory={ category }/>
            ))
         }
      </>
   )
}