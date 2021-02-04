import axios from "axios"

export const getAllArticles=()=>async(dispatch)=>{

    try {
 
         let {data}=await axios.get("/api/articles")
 
         dispatch(getAllArticlesSuccess(data))
      
    } catch ({response:{data}}) {
         dispatch(getAllArticlesFail(data))
    }
 }
 
 
 export const getAllArticlesSuccess=(data)=>{
   return{
     type:"GET_ALL_ARTICLES_SUCCESS",
     payload:data
   }
 }
 export const getAllArticlesFail=(message)=>{
   return{
    type:"GET_ALL_ARTICLES_FAIL",
     payload:message
   }
 }
 