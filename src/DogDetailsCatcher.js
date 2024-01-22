import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

function DogDetailsCatcher() {
  const { name } = useParams();

  if (name === undefined) {
    <Navigate to="/dogs" />;
  }

  return (
    <div>DogDetailsCatcher</div>
  );
}

export default DogDetailsCatcher;