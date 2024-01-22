import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Main App component */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element= {<DogList />} path="/"/>
        <Route element= { <DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
