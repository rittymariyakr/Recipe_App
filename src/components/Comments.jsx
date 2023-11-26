import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateComment } from '../services/allAPI';

function Comments({displayRecipe}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
 
    const [uploadCommment, setUploadComment] = useState("")
    console.log(uploadCommment);

    console.log(displayRecipe);

 const handleUploadComment = async ()=>{
    
        const {id} =displayRecipe
        console.log(id);
        
       

            let body = {
                Comment:""
            }
            
           const response = await updateComment(body)
           console.log(response);
           if(response.status >= 200 && response.status <300){

        
                          
                alert('Recipe Uploaded Successfully')
                handleClose()
            }
            else{
                alert('Oops!.. Something went wrong.')
            }
    }
  return (
    
    <>
    <div className='d-flex'>
        <div className='p-1 bg-warning  rounded' style={{color:'black'}}>Leave Your Comment         <button onClick={handleShow} className='btn btn-outline-light ms-3'><i class="fa-solid fa-plus "></i></button>
</div>
    {/* <i class="fa-solid fa-comment fa-2x"></i> */}
      
    </div>
    <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // size='lg'
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title>Leave Your Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control  onChange={(e)=>setUploadComment(e.target.value)}
                                type="text"
                                placeholder="Your Comment"
                            />
                        </Form.Group>
                        
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUploadComment} variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>

    </>
  )
}

export default Comments
