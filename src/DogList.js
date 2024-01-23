import React from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";

/** Basic List component to list all the dogs with links to details of a dog
 *
 * Props: dogs - array of dog objects
 * State: None
 *
 * { App } --> DogList
*/

function DogList({ dogs }) {
  console.log("In DogList, dogs is", dogs);

  return (
    <div className='DogList'>
      <h1> Dogs: </h1>
      {dogs.map(dog => (
        <div>
          <Link key={dog.id} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </Link>
          <img src={`/${dog.src}.jpg`} alt={dog.name} />
        </div>
      ))}
    </div>
  );
}

export default DogList;