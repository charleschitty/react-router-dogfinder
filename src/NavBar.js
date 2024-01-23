import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * A NavBar component to list out the dogs by name and link to their details
 * @param {string[]} dogNames - A list of the dog names
 *
 * App -> NavBar
 */
function NavBar({ dogNames }) {
  console.log("NavBar rendered with: ", dogNames);

  return (
    <div className='NavBar'>
      <Link to="/dogs">Home</Link>
      {dogNames.map(name => (
        <Link key={name} to={`/dogs/${name.toLowerCase()}`}> {name} </Link>
      ))}
    </div>
  );
}

export default NavBar;