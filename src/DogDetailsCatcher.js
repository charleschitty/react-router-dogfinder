import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

/**
 * Handles the routing logic for rendering a DogDetail Comp
 *
 * Prop:
 * State:
 *
 * App -> DogDetailsCatcher -> DogDetails
 */

function DogDetailsCatcher({ dogs }) {
  const { name } = useParams();

  console.log("DogDetailsCatcher renders with", dogs, name);

  if (name) {
    const desiredDog = dogs.find((dog) => dog.name.toLowerCase() === name);
    console.log("desiredDog in DogDetailsCatcher", desiredDog);
    if (desiredDog === undefined) {
      return <Navigate to="/" />;
    }
    return (
      <DogDetails dog={desiredDog} />
    );
  };
}

export default DogDetailsCatcher;