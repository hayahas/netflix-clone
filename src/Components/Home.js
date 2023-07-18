import MovieList from './MovieList';
import { useState, useEffect } from 'react';

export default function Home() {

    const [data, setData] = useState([]);
    async function getTrendingMovies() {
        let url = process.env.RREACT_APP_SERVER_URL;
        let response = await fetch(`${url}/trending`);
        let movies = await response.json();
        setData(movies);
    }
    useEffect(() => {
        getTrendingMovies()
    }, [])
    return (
        <>

            <MovieList data={data} />
        </>
    )
};