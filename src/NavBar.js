import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * A NavBar component to list out the dogs by name and link to their details
 * @param {string[]} dogs - A list of the dog names
 *
 * App -> NavBar
 */
function NavBar({ dogs }) {
  console.log("NavBar rendered with: ", dogs);

  return (
    <div className='NavBar'>
      <Link to="/dogs">Home</Link>
      {dogs.map(dog => (
        <Link key={dog} to={`/dogs/${dog.toLowerCase()}`}> {dog} </Link>
      ))}
    </div>
  );
}

export default NavBar;