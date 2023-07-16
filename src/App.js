import logo from './logo.svg';
import './App.css';
import Home  from './Components/Home';


import NavBar from './Components/NavBar';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
        <NavBar/>
        <Home/>
    </div>
  );
}

export default App;
