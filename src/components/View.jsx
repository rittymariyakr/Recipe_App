import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import {  Row} from 'react-bootstrap'
import { getAllRecipes } from '../services/allAPI'

function View({uploadStatusRecipe}) {

  const [uploadCommentStatus,setUploadCommentStatus] = useState({})


  const [allRecipes,setAllRecipes] = useState([])

  
  const [deleteRecipeStatus ,setDeleteRecipeStatus] = useState(false)

const getAllUploadedRecipes =async()=>{
  const response = await getAllRecipes()
  // console.log(response);
  const {data} = response
  // console.log(data);
  setAllRecipes(data)
  
}
console.log(allRecipes);


useEffect(()=>{
  getAllUploadedRecipes()
  setDeleteRecipeStatus(false)
},[uploadStatusRecipe,uploadCommentStatus, deleteRecipeStatus])

  return (
    <>
   <Row>
     
        {allRecipes.length>0?
          allRecipes.map((recipe)=>(
           
         <ViewCard  setUploadCommentStatus={setUploadCommentStatus}  displayRecipe ={recipe} setDeleteRecipeStatus={setDeleteRecipeStatus}/>
        
          ))
          :

        <p>Nothing to display</p>
       }
     
      
     </Row>
  </>
  )
}

export default View