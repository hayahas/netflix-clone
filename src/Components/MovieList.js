import Movie from './Movie';

export default function MovieList(props) {

  // console.log(props.data)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
      {
        props.data &&
        props.data.map((obj, i) => (
          <Movie commentHandler = {commentHandler} data={obj} key={i} />
          // console.log(obj)
        ))
      }
    </div>
  )

};