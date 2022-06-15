import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function ModalAddBook({show,onDelete}) {
  
  return (
    <>
      <Modal show={show} onHide={onDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>

  <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option></option>
        <option value="1">amour</option>
        <option value="2">suspens</option>
        <option value="3">policier</option>
      </Form.Select>
    </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={onDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default ModalAddBook