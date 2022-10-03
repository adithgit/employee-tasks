import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Addform from './Addform';
function Add(props) {
  return (
    <div>
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter {props.type} Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Addform type={props.type}/>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default Add