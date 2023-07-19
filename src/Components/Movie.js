import { useState } from 'react';
import ModalMovie from './ModalMovie';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(`https://image.tmdb.org/t/p/w500${props.data.release_date}`)
  return (<>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.release_date}`} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          Movie ID : {props.data.id}
        </Card.Text>
        <Button onClick={handleShow} variant="primary">Show Modal</Button>
        
      </Card.Body>
    </Card>
    <ModalMovie commentHandler = {props.commentHandler} modalData={props.data} handleShow={handleShow} handleClose={handleClose} show={show} />
  </>
  );
}

export default Movie;