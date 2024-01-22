import React from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";

/** Basic Navigation Bar component that redirects to
 *
 * Props: dogs *****TODO:
 * State: None
 *
 * { App } -->
*/

const defaultDogs = ["whiskey", "duke", "perry"];
// Get request to localhost:5001/dogs to get dogs object
// {name, age, facts, src, id}

//SHOW IMAGES
//NON ENDPOINTS SEND TO DOGS

function DogList( dogs = defaultDogs) {
  return (
    <div className='DogList'>
      <h1>Hello from DogList</h1>
    </div>
  );
}

export default DogList;