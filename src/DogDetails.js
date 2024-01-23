import { useParams } from "react-router-dom";

/** Shows the details of a single Dog
 *
 * Props:
 * - dog: object - A dog object from the DB
 *
 * State: None
 *
 * App -> DogDetailsCatcher -> DogDetails
 */

function DogDetails({ dog }) {
  console.log("DOG", dog);
  // const { name } = useParams();
  return (
    <div>
      <h2>Name: {dog.name}</h2>
      <p> Age: {dog.age} </p>
      <p> Facts: </p>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>
            {fact}
          </li>
        ))}
      </ul>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
    </div>
  );
}
export default DogDetails;
