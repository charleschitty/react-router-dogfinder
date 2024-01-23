/**
 * A helper function to get all the dogs from a database
 * @returns {object} Returns an array of dog objects from the database
 * [{name: "fido", age: 5... }, {...}]
 */

async function getDogsInfo() {
  console.log("getDogsInfo called");

  const response = await fetch("http://localhost:5001/dogs")
  const data = await response.json();

  return data;
};

export { getDogsInfo };