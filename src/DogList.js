import React from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";
import { getDogsInfo } from './getDogsInfo';

/** Basic Navigation Bar component that redirects to
 *
 * Props: dogs object
 * State: None
 *
 * { App } -->
*/

const dogsData = await getDogsInfo();
// Get request to localhost:5001/dogs to get dogs object
// {name, age, facts, src, id}

function DogList( {dogs = dogsData} ) {
  return (
    <div className='DogList'>
      <h1> Dogs: </h1>
        <ul>
          {dogs.map(dog => (
            <li key={dog.id}>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                Name: {dog.name}
              </Link>
              <img src={`/${dog.src}.jpg`} alt={dog.name}/>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default DogList;