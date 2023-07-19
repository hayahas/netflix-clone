import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function ModalMovie({ handleShow, handleClose, show, modalData, commentHandler }) {

  const commentRef = useRef();
  const [comment, setComment] = useState(' ');
  function handleSubmit(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;
    let newMovie = { ...modalData, userComment }
    setComment(userComment);
    commentHandler(newMovie, newMovie.id)
  }
  async function handleAddFav(e) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/movies`;
    let data = {
      t: modalData.t,
      y: modalData.y,
      m: modalData.m
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let recievedData = await response.json();
    if (response.status == 200) { alert('Added Successfully') }
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

          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comments</Form.Label>
              <Form.Control type="text" placeholder="Type your comments" />

            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={(e) => { handleAddFav(e) }} variant="primary" type="submit">Add to Favorite</Button>
          </Form>
          {modalData.comment ? modalData.comment : "No comment Added"}
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