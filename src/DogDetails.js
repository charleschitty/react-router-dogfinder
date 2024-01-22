import { useParams } from "react-router-dom";

/** ...
 *
 */
const testDog = {
  "name": "Perry",
  "age": 4,
  "src": "perry",
  "facts": [
    "Perry loves all humans.",
    "Perry demolishes all snacks.",
    "Perry hates the rain."
  ],
  "id": "4aed"
};

function DogDetails({ dog = testDog }) {
  console.log("DOG", dog);
  // const { name } = useParams();
  return (
    <div>
      <h2>Name: {dog.name}</h2>
        <li>
          <p> Age: {dog.age} </p>
          <p> Facts: </p>
          <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>
              {fact}
            </li>
          ))}
          </ul>
          <img src={`/${dog.src}.jpg`} alt={dog.name}/>
        </li>
    </div>
  );
}
export default DogDetails;
