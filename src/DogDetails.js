import { useParams } from "react-router-dom";

/** ...
 *
 */

function DogDetails({ dog }) {
  // const { name } = useParams();
  return (
    <div>
      <h2>Name: {dog.name}.</h2>
        <li>
          <p> Age: {dog.age} </p>
          <p> Facts: </p>
          <ul>
          {dog.facts.map(fact => (
            <li>
              {fact}
            </li>
          ))}
          </ul>
          <img src={dog.src}> </img>
        </li>
    </div>
  );
}
export default DogDetails;
