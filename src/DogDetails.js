import "./DogDetails.css"

/** Shows the details of a single Dog
 *
 * Props:
 * - dog: object - A dog object from the database
 *
 * State: None
 *
 * App -> DogDetailsCatcher -> DogDetails
 */

function DogDetails({ dog }) {
  console.log("DogDetails of", dog, "reached");

  return (
    <div className="DogDetails">
      <h2>{dog.name}</h2>
      <p> <b>Age:</b> {dog.age} </p>
      <p> <b>Facts:</b> </p>
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
