import MovieList from './MovieList';
import { useState, useEffect } from 'react';

function Home() {

    const [data, setData] = useState([]);
    async function getTrendingMovies() {
        let url = process.env.REACT_APP_SERVER_URL;
        let response = await fetch(`${url}/trending`);
        // console.log(response)
        let movies = await response.json();
        setData(movies);
    }
    useEffect(() => {
        getTrendingMovies()
    }, [])
    // console.log(data);
    return (
        <>
            {
                <MovieList data={data} />
            }
        </>
    )
}
export default Home;