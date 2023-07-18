
import './App.css';
import FavList from './Components/FavList';
import Home  from './Components/Home';
import NavBar from './Components/NavBar';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
        <NavBar/>
        <Routes>
        <Route path ='/' element= {<Home/>}></Route>
        <Route path ='/favotite' element= {<FavList/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
