import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function ModalMovie({ handleShow, handleClose, show, modalData }) {
  function handleSubmit(e) {
    e.preventDefault();
   // console.log(e.target);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${modalData.release_date}`} alt={modalData.title} />
          <p>{modalData.overview}</p>

          <Form onSubmit={()=>handleSubmit()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comments</Form.Label>
              <Form.Control type="text" placeholder="Type your comments" />

            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default ModalMovie;