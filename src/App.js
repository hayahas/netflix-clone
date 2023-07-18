
import './App.css';
import Home  from './Components/Home';
import NavBar from './Components/NavBar';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
        <NavBar/>
        <Routes>
          <Route path ='/' element= {<Home/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
