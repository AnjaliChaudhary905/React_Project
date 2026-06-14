import axios from "axios";

 export const getRecipes = async () => {
  
   try {
    const res = await axios.get('https://dummyjson.com/recipes?limit=3')
    console.log(res.data)
    return res.data
    
    
   } catch (error) {
    console.log(error||"error occured")
    throw error
   }
  
}



 export const getALLRecipes = async () => {
  
   try {
    const res = await axios.get('https://dummyjson.com/recipes')
    console.log(res.data)
    return res.data
    
    
   } catch (error) {
    console.log(error||"error occured")
    throw error
   }
  
}



