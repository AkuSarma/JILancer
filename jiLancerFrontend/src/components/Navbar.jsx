import { Link } from "react-router-dom";
import Logout from "./logout";
import PropTypes from "prop-types";

const Navbar = ({user}) => {
  return (
    <div className="bg-primaryColor px-6 py-3 flex items-center justify-between rounded-xl h-[3rem] ">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg text-white">logo</span>
        <input
          type="text"
          className="w-80 px-4 py-2 bg-white border rounded-full outline-none focus:ring focus:ring-green-200"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center space-x-6 text-white">
        <Link to="/" class="hover:text-white">
          Home
        </Link>
        <Link to="/portfolio" class="hover:text-white">
          Portfolio
        </Link>
        <Link to="/contact" class="hover:text-white">
          Contact
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="text-white hover:text-gray-800">
          {user ? <span> {user} </span> : <Link to="/Auth">Login</Link>}
        </button>
        <Logout/>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  user: PropTypes.string
};
export default Navbar