import React from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";

/** Basic Navigation Bar component that redirects to
 *
 * Props: defaultDogs *****TODO:
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
      <ul>
        {dogs.map(dog => (
          <li key={dog.id}>
            <Link to={`/dogs/${dog.src}`}> {dog.name} </Link>
          </li>
        ))}
      </ul>
      <h1> HELLO </h1>
    </div>
  );
}

export default DogList;