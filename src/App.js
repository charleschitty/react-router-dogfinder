import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DogList from "./DogList";
import NavBar from './NavBar';
import { getDogsInfo } from './getDogsInfo';
import { useState } from 'react';
import DogDetailsCatcher from './DogDetailsCatcher';

/** Main App component
 *
 * Props: None
 *
 * State:
 * - dogs: array of dog objects - [{dog}, {dog}, ...] from fetch request to
 * localhost:5001/dogs
 *
 * App -> {NavBar, Routes}
 */

function App() {
  const [dogs, setDogs] = useState([]);

  console.log("App renders with", dogs);

  // Sends fetch request to localhost:5001/dogs
  async function getDogs() {
    const data = await getDogsInfo();
    setDogs(data);
  };

  // If nothing returned from API, length will always be 0
  // may want to handle with a discreet state (isLoading/isEmpty) and check that instead

  // Without data in dogs, shows loading screen and sends fetch request
  if (dogs.length === 0) {
    getDogs();
    return (
      <div id="loading">
        <h1> LOADING </h1>
      </div>
    );
  };

  const dogNames = dogs.map(dog => (
    dog.name
  ));

  return (
      <BrowserRouter>
        {/* might be better to be explicit since dogs means one thing in NavBar and something different everywhere else */}
        <NavBar dogNames={dogNames} />
        <Routes>
          <Route element={<DogList dogs={dogs}/>} path="/dogs" />
          <Route element={<DogDetailsCatcher dogs={dogs} />} path="/dogs/:name" />
          <Route element={<Navigate to="/dogs" />} path="/*" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
