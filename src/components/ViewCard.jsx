import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteARecipe } from '../services/allAPI';
import Comments from './Comments'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function ViewCard({displayRecipe,setDeleteRecipeStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);


  // remove recipe
  const removeRecipe = async(id)=>{
    const response = await deleteARecipe(id)
    setDeleteRecipeStatus(true)
  }
  return (
    <>
      <div class="card mb-3 shadow ms-2" style={{backgroundColor:'black',color:'white',height:'340px'}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img  width={'280px'} height={'250px'} src={displayRecipe.url} class="" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title text-warning fw-bolder">{displayRecipe.caption}</h4>
          <h5>How to Cook :</h5>
          <p class="card-text">{displayRecipe.description}</p>
          <div className=' d-flex align-items-center justify-content-between p-2 rounded ms-3'>
         
          <button className='btn btn-outline-light' onClick={handleShow}><i class="fa-brands fa-youtube  text-danger fa-2x"></i></button>

          <Comments displayRecipe={displayRecipe}/>


          <button className='btn btn-outline-light' onClick={()=>removeRecipe(displayRecipe?.id)}><i class="fa-solid fa-trash text-danger fa-2x"></i></button>
          </div>



          <div className='mt-2 text-center ms-4'>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View Comments
        <i class="fa-solid fa-angle-down ms-4"></i>
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card className='mt-2' body style={{ width: '400px' ,height:'50px', marginLeft:'160px'}}>
              Anim pariatur cliche 
            </Card>
          </div>
        </Collapse>
        </div>
      </div>




        </div>
      </div>
    </div>
      </div>
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{displayRecipe.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width="100%" height="400" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" src={ `${displayRecipe.embedLink}?autoplay=1`} allowfullscreen></iframe>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default ViewCard