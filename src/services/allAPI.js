import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//upload videos
export const uploadRecipe = async (reqBody)=>{
    return await commonAPI('POST', `${serverURL}/recipes`, reqBody)
}

//get all uploaded recipes
export const getAllRecipes =async()=>{
    return await commonAPI('GET',`${serverURL}/recipes`,"")
  }

  //delete recipes
export const deleteARecipe = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/recipes/${id}`,{})
}


export const updateComment = async (id,body)=>{
    return await commonAPI('PUT', `${serverURL}/recipes/${id}`, body)
}



