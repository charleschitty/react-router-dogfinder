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
 * - dogs: array of dog objects - [{dog}, {dog}, ...]
 *
 * App -> {NavBar, Routes}
 */

function App() {
  const [dogs, setDogs] = useState([]);

  console.log("App renders with", dogs);

  async function getDogs() {
    console.log("getDogs ran, dogs state", dogs);
    const data = await getDogsInfo();
    console.log("getDogs ran", data);
    setDogs(data);
  }

  if (dogs.length === 0) {
    getDogs();
  }

  const dogNames = dogs.map(dog => (
    dog.name
  ));

  console.log(dogNames, "in App");

  return (
    <BrowserRouter>
      <NavBar dogs={dogNames} />
      <Routes>
        <Route element={<DogList />} path="/" />
        <Route element={<DogDetailsCatcher dogs={dogs} />} path="/dogs/:name" />
        <Route element={<Navigate to="/dogs" />} path="/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
