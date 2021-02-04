import axios from "axios"

export const getAllProjects=()=>async(dispatch)=>{

    try {
 
         let {data}=await axios.get("/api/projects")
 
         dispatch(getAllProjectsSuccess(data))
      
    } catch ({response:{data}}) {
         dispatch(getAllProjectsFail(data))
    }
 }
 
 
 export const getAllProjectsSuccess=(data)=>{
   return{
     type:"GET_ALL_PROJECTS_SUCCESS",
     payload:data
   }
 }
 export const getAllProjectsFail=(message)=>{
   return{
    type:"GET_ALL_PROJECTS_FAIL",
     payload:message
   }
 }
 