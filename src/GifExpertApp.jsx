import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";

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
            //addCategory={ setCategories }
            onNewCategory={ onAddCategory }
         />
         <ol>
            {categories.map(category => {
               return <li key={category}>{category}</li>
            })}
         </ol>
      </>
   )
}