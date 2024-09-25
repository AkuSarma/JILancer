import { Link } from "react-router-dom";
import Logout from "./logout";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Navbar = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll event to apply blur, transparency, and border color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-primaryColor px-6 py-3 flex items-center rounded-3xl h-[3rem] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-opacity-70 border-b border-white'
          : 'bg-opacity-100'
      }`}
    >
      {/* Left: Logo and Search Bar */}
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg text-white">logo</span>
        <input
          type="text"
          className="w-80 px-4 py-1 bg-white border rounded-full outline-none focus:ring focus:ring-green-200"
          placeholder="Search"
        />
      </div>

      {/* Middle: Navigation Links */}
      <div className="flex items-center space-x-6 text-white ml-auto">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/portfolio" className="hover:text-white">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>

      {/* Right: User Actions */}
      <div className="flex space-x-4 items-center py-1 px-4 bg-CustomGray rounded-3xl ml-6">
        <button className="text-white hover:text-gray-800">
          {user ? <span>{user}</span> : <Link to="/Auth">Login</Link>}
        </button>
        <Logout />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.string,
};

export default Navbar;
