import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * A NavBar component to list out the dogs by name and link to their details
 * @param {string[]} dogs - A list of the dog names
 *
 * App -> NavBar
 */
function NavBar({dogs = ["Duke", "Whiskey", "Perry"]}) {
  console.log("NavBar rendered with: ", dogs)
  return (
    <div className='NavBar'>
      <ul>
        <li><Link to="/" />Home</li>
        {dogs.map(dog => (
          <li key={dog}>
            <Link to={`/dogs/${dog.toLowerCase()}`}> {dog} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;