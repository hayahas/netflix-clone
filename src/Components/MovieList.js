import Movie  from './Movie';

export default function MovieList(data) {
    return(
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
            {
              data.map((obj,i) => (
                <Movie data ={obj} key={i}/>
              ))
            }
        </div>
    )
 
};