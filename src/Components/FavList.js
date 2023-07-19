import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavList() {
    function favMovies() {
        const [favMovie, setFavMovie] = useState([]);
        async function handleFavMovie() {
            let url = `${process.env.REACT_APP_SERVER_URL}/movies`;
            let response = await fetch(url);
            let recievedData = await response.json();
            // console.log(response)

            setFavMovie(recievedData);
        }
        async function handleDelete(id){
            const url = `${process.env.REACT_APP_SERVER_URL}/movies/${id}`;
            let response = await fetch(url, {
              method: 'DELETE',
              headers: {
                "Content-Type": "application/json"
              },
            });
            if(response.status === 204){
              alert('deleted successfuly')
            }
            handleFavMovie();
          }
        useEffect(() => {
            handleFavMovie()
        }, [])
    }
    return (
        <div>
            {favRecipe.map((movie, id) => (
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.release_date}`} alt={props.title} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            Movie ID : {movie.id}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleDelete(movie.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );

}
export default FavList;