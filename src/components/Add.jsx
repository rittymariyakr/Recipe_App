import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (


        <>
            <button onClick={handleShow} className='ms-5 btn btn-outline-dark rounded '><i class="fa-solid fa-upload fs-5 "></i>
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // size='lg'
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Food Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control
                                type="text"
                                placeholder="Enter Food ID"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control
                                type="text"
                                placeholder="Enter Food Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control
                                type="text"
                                placeholder="Enter Food Image"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control
                                type="text"
                                placeholder="Enter Food Description"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                           <Form.Control
                               type="text"
                               placeholder="Enter Food Video Link"
                           />
                       </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add
