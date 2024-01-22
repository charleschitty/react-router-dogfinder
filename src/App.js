import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import NavBar from './NavBar';

/** Main App component */

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element= {<DogList />} path="/"/>
        <Route element= { <DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
