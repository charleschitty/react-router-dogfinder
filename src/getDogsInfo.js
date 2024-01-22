/**
 * A helper function to get all the dogs from a database
 * @returns {object} Returns an object of dogs from a the db
 * {dog, dog, dog, ...}
 */

async function getDogsInfo() {
  const response = await fetch("http://localhost:5001/dogs")
  const data = await response.json();

  return data;
}