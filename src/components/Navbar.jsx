import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="bg-navbarGreen px-6 py-3 flex items-center justify-between rounded-xl">
      <div class="flex items-center space-x-4">
        <span class="font-bold text-lg text-white">logo</span>
        <input
          type="text"
          class="w-80 px-4 py-2 bg-white border rounded-full outline-none focus:ring focus:ring-green-200"
          placeholder="Search"
        />
      </div>
      <div class="flex items-center space-x-6 text-white">
        <Link to="/" class="hover:text-white">
          Home
        </Link>
        <Link to="/profile" class="hover:text-white">
          Profile
        </Link>
        <Link to="/contact" class="hover:text-white">
          Contact
        </Link>
      </div>
      <div class="flex space-x-4">
        <button class="text-white hover:text-gray-800">
          <Link to="/login">Login</Link>
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar